const { AuthenticationError } = require('apollo-server-express');
const { User, Job } = require('../models');
const { signToken } = require('../utils/auth');

const resolvers = {
  Query: {
    me: async (parent, args, context) => {
      if (context.user) {
        const userData = await User.findOne({ _id: context.user._id })
          .select('-__v -password');

        return userData;
      }

      throw new AuthenticationError('Not logged in');
    },
    users: async () => {
      return User.find()
        .select('-__v -password')
    },

    user: async (parent, { phoneNumber }) => {
      return User.findOne({ phoneNumber })
        .select('-__v -password')
    }
  },

  Mutation: {
    addUser: async (parent, args) => {
      const user = await User.create(args);
      const token = signToken(user);

      return { token, user };
    },

    login: async (parent, { phoneNumber, password }) => {
      const user = await User.findOne({ phoneNumber });

      if(!user) {
        throw new AuthenticationError('No user associated with this phone number');
      }

      const correctPw = await user.isCorrectPassword(password);

      if (!correctPw) {
        throw new AuthenticationError('Incorrect password')
      }

      return user;
    },
    updateUser: async (parent, args, context) => {
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { _id: args._id },
          { args },
          {new: true }
        )
      }
    },
    removeUser: async (parent, args, context) => {
      if (context.user) {

        const user = await User.findByIdAndRemove(
          { _id: args._id } 
        );

        return user
      }

      throw new AuthenticationError('You need to be logged in!')
    },
    addJob: async (parent, args, context) => {
      if (context.user) {
        const job = await Job.create(args);
        return job;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    updateJob: async (parent, args, context) => {
      if (context.user) {

        const job = await Job.findByIdAndUpdate(
          { _id: args._id }, // not sure about this
          { args }, // not sure about this
          { new: true }
        );

        return job;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeJob: async (parent, args, context) => {
      if (context.user) {
        
        const job = Job.findByIdAandRemove(args); // not sure about this

        return job;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;