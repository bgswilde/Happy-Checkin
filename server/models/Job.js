const { Schema, model } = require('mongoose');
const FeedbackSchema = require('./Feedback');
const PackageSchema = require('./Package');
const HotelSchema = require('./Hotel');
const dateFormat = require('../utils/dateFormat');

const JobSchema = new Schema(
  {
    createdAt: {
        type: Date,
        default: Date.now,
        get: timestamp => dateFormat(timestamp);
    },
    claimedAt: {
        type: Date
    },
    completedAt: {
        type: Date
    },
    customer: {
        type: String,
        ref: 'User'
    },
    checker: {
        type: String,
        ref: 'User'
    },
    feedback: [FeedbackSchema],

    checkIn: {
        type: Date
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
