const { Schema, model } = require('mongoose');
const FeedbackSchema = require('./Feedback')
const PackageSchema = require('./Package')

const JobSchema = new Schema(
  {
    createdAt: {
        type: Date,
        default: Date.now,
    },
    claimedAt: {
        type: Date
    },
    completedAt: {
        type: Date
    }, 

    package: PackageSchema,

    customer: {
        type: String,
        ref: 'User'
    },

    checker: {
        type: String,
        ref: 'User'
    },

    feedback: FeedbackSchema,

    // deadline of job completion
    checkIn: {
        type: Date
    },
    instructions: {
        type: String,
        minlength: 1
    }
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
