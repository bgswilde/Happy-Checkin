require('dotenv').config()
const { AuthenticationError } = require('apollo-server-express');
const { User, Reservation } = require('../models');
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
      return await User.find({})
        .select('-__v -password')
    },
    user: async (parent, { phoneNumber }) => { // successful
      return User.findOne({ phoneNumber })
        .select('-__v -password')
    },
    reservations: async (parent, args, context) => {
      return Reservation.find({customer: {_id: args.userId}})
        .populate('customer')
        .populate('checker');
      // return Reservation.find().populate('customer')
    },
    allReservations: async () => { // successful
      return await Reservation.find({})
        .populate('customer')
        .populate('checker');
    },
    checkoutSession: async (parent, args, context) => {
      const session = await createCheckoutSession(args.productName, args.unitAmount, args.quantity, context.headers.origin);
      // console.log('checkoutSession', session)
      return session;
    },
    config: async (parent, args, context) => {
      return process.env;
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
    addReservation: async (parent, args, contect) => {
      const { reservation } = args;
      let reservationData = await Reservation.create(reservation);
      reservationData = await reservationData.populate('customer').populate('checker').execPopulate();
      return reservationData;
      
    },
    updateReservation: async (parent, args, context) => { // tested successfully -BK
      if (context.user) {

        const reservation = await Reservation.findOneAndUpdate(
          { _id: args.reservationId },
          { checkIn: args.checkIn, claimedAt: args.claimedAt, confirmationKey: args.confirmationKey, instructions: args.instructions },
          { new: true }
        );

        return reservation;
      }

      throw new AuthenticationError('You need to be logged in!');
    },
    removeReservation: async (parent, args, context) => { // tested successfully -BK
      if (context.user) {
        
        const reservation = Reservation.findOneAndRemove({ _id: args.reservationId });

        return reservation;
      }

      throw new AuthenticationError('You need to be logged in!');
    }
  }
};

module.exports = resolvers;