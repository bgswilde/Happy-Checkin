const { Schema, model } = require('mongoose');
const User = require('./User');

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
    package: [], // packageSchema here when file is created
    customer: [User], //user
    checker: [User], //user
    feedback: [], //feedbackSchema here when file is created
    checkIn: {}, // deadline of job completion
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
        return 'Available'
    } else if (!this.completedAt) {
        return 'Claimed'
    } else {
        return 'Completed'
    }
})


const Job = model('Job', jobSchema);

module.exports = Job;
