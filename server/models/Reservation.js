const mongoose = require('mongoose')

const { Schema, Types } = mongoose;
const FeedbackSchema = require('./Feedback');
const PackageSchema = require('./Package');
const HotelSchema = require('./Hotel');
const { dateFormater } = require('../utils/dateFormat');

const ReservationSchema = new Schema(
  { 
    customerId: {
        type: String
    },
    checkerId: {
        type: String
    },
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
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    checker: {
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    package: PackageSchema,
    hotel: HotelSchema,
    feedback: FeedbackSchema,

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

ReservationSchema.virtual('status').get(function() {
    if (!this.claimedAt && !this.completedAt) {
        return ''
    } else if (!this.completedAt) {
        return 'claimed'
    } else {
        return 'completed'
    }
})

const Job = mongoose.model('Job', JobSchema)

module.exports = Reservation;
