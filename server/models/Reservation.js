const mongoose = require('mongoose');

const { Schema, Types } = mongoose;
const FeedbackSchema = require('./Feedback');
const PackageSchema = require('./Package');
const HotelSchema = require('./Hotel');
const OptionSchema = require('./Option');

const { dateFormater } = require('../utils/dateFormat');

const ReservationSchema = new Schema(
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

    checkInTime: {
        type: String,
        required: true
    },
    confirmationKey: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        minlength: 1
    },
    options: OptionSchema

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

const Reservation = mongoose.model('Reservation', ReservationSchema)

module.exports = Reservation;
