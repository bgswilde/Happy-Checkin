const { AuthenticationError } = require('apollo-server-express');
const { User, Job } = require('../models');
const { signToken } = require('../utils/auth');
const { createCheckoutSession } = require('../utils/stripe');

const resolvers = {
  Query: {
    me: async (parent, args, context) => { // successful
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => { // successful
      return User.find()
        .select('-__v -password')
    },

    user: async (parent, { phoneNumber }) => { // successful
      return User.findOne({ phoneNumber })
        .select('-__v -password')
    },
    jobs: async () => {
      return Job.find().populate('customer')
    },
    checkoutSession: async (parent, args, context) => {
      const session = await createCheckoutSession(args.productName, args.unitAmount, args.quantity, context.headers.origin);
      return session;
    }
  },

  Mutation: {
    login: async (parent, { phoneNumber, password }) => { // tested successfully -BK
      const user = await User.findOne({ phoneNumber });

      if(!user) {
        throw new AuthenticationError('No user associated with this phone number');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password')
      }

      const token = signToken(user);
      return { token, user };
    },
    addUser: async (parent, args) => { // tested successfully -BK
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    
    updateUser: async (parent, args, context) => { // tested successfully -BK
      if (context.user) {
        const user = await User.findOneAndUpdate(
          { _id: context.user._id },
          { firstName: args.firstName,
          lastName: args.lastName,
          phoneNumber: args.phoneNumber,
          },
          { new: true }
        )
        return user
      }
    },
    removeUser: async (parent, args, context) => { // tested successfully -BK
      if (context.user) {

        const user = await User.findOneAndRemove(
          { _id: context.user._id } 
        );

        return user
      }

      throw new AuthenticationError('You need to be logged in!')
    },
    addJob: async (parent, args, context) => { // tested successfully -BK
      if (context.user) {
        const job = await Job.create({...args, customer: args.userId})
        const jobPlusCustomer = Job.findOneAndUpdate( 
          { _id: job.id } ,
          { $push: { customer: args.userId }})
          .populate('customer');
        const jobPlusPackage = await Job.findOneAndUpdate(
          { _id: job.id },
          { $push: { package: {title: args.title, imageUrl: args.imageUrl, cost: args.cost, description: args.description }}}
        );
        const updatedJob = await Job.findOneAndUpdate(
          { _id: job.id },
          { $push: { hotel: {name: args.name, street1: args.street1, city: args.city, state: args.state, zip: args.zip }}}
        ).populate('customer');
        return updatedJob;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    updateJob: async (parent, args, context) => { // tested successfully -BK
      if (context.user) {

        const job = await Job.findOneAndUpdate(
          { _id: args.jobId },
          { checkIn: args.checkIn, claimedAt: args.claimedAt, confirmationKey: args.confirmationKey, instructions: args.instructions },
          { new: true }
        );

        return job;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeJob: async (parent, args, context) => { // tested successfully -BK
      if (context.user) {
        
        const job = Job.findOneAndRemove({ _id: args.jobId });

        return job;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;