const { Schema, model } = require('mongoose');
const User = require('./User');
const Package = require('./Package');
const FeedbackSchema = require('./Feedback')

const jobSchema = new Schema(
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

    package: Package,

    customer: User,

    checker: User,

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

jobSchema.virtual('status').get(function() {
    if (!this.claimedAt && !this.completedAt) {
        return 'unclaimed'
    } else if (!this.completedAt) {
        return 'claimed'
    } else {
        return 'completed'
    }
})


const Job = model('Job', jobSchema);

module.exports = Job;
