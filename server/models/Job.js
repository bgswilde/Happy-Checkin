const { Schema, model, Types } = require('mongoose');
const FeedbackSchema = require('./Feedback');
const PackageSchema = require('./Package');
const HotelSchema = require('./Hotel');
const userSchema = require('./User')
const { dateFormater } = require('../utils/dateFormat');

const JobSchema = new Schema(
  {
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormater(timestamp)
    },
    claimedAt: {
        type: Date,
        get: timestamp => dateFormater(timestamp)
    },
    completedAt: {
        type: Date,
        get: timestamp => dateFormater(timestamp)
    },
    customer: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    checker: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }],
    package: [PackageSchema],
    hotel: [HotelSchema],
    feedback: [FeedbackSchema],

    checkIn: {
        type: String
    },
    confirmationKey: {
        type: String
    },
    instructions: {
        type: String,
        minlength: 1
    },
    options: []

  },
  {
    toJSON: {
      virtuals: true
    }
  }
);

JobSchema.virtual('status').get(function() {
    if (!this.claimedAt && !this.completedAt) {
        return ''
    } else if (!this.completedAt) {
        return 'claimed'
    } else {
        return 'completed'
    }
})

const Job = model('Job', JobSchema)

module.exports = Job;
