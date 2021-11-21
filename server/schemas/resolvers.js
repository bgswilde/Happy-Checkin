const { AuthenticationError } = require('apollo-server-express');
const { User, Job } = require('../models');
const { signToken } = require('../utils/auth');

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

    // as with the job resolvers, this syntax did not work for me (refering to the update and remove mutations).
    // The updateUser mutation went through without errors, but it returned a null user and didnt update anything.
    // I havent tested the remove user or remove job but I would assume it is the same case on those
    // Shall do further testing when I return this afternoon
    // -BK
    updateUser: async (parent, args, context) => { 
      if (context.user) {
        const user = await User.findByIdAndUpdate(
          { userId: context.user._id }, 
          { new: true }
        )

        return user
      }
    },
    removeUser: async (parent, args, context) => { // tested successfully -BK
      if (context.user) {

        const user = await User.findByIdAndRemove(
          { _id: args.userId } 
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