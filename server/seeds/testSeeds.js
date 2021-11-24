const db = require('../config/connection');
const { User, Reservation } = require('../models');

db.once('open', async () => {

  // delete existing users
  await User.deleteMany();

  const customer1 = await User.create({
    firstName: 'Steven',
    lastName: 'Gerrard',
    phoneNumber: '8791532345',
    password: 'password12345'
  });

  const customer2 = await User.create({
    firstName: 'Lionel',
    lastName: 'Messi',
    phoneNumber: '9999999999',
    password: 'password12345'
  });

  const customer3 = await User.create({
    firstName: 'Harry',
    lastName: 'Kane',
    phoneNumber: '2222222222',
    password: 'password12345'
  });

  const checker1 = await User.create({
    firstName: 'Riyad',
    lastName: 'Mahrez',
    phoneNumber: '3333333333',
    password: 'password12345'
  });

  const checker2 = await User.create({
    firstName: 'Virgil',
    lastName: 'Van Dijk',
    phoneNumber: '4444444444',
    password: 'password12345'
  });

  const checker3 = await User.create({
    firstName: 'Andy',
    lastName: 'Robertson',
    phoneNumber: '5555555555',
    password: 'password12345'
  });

  console.log('users seeded');

  // Packages
  const packages = [
    {
      title: "Package 1",
      imageUrl: "http://example.com/someimage.jpg",
      cost: 2000,
      description: "Lorem ipsum dolar sit amet"
    },
    {
      title: "Package 2",
      imageUrl: "http://example.com/someimage.jpg",
      cost: 3000,
      description: "Lorem ipsum dolar sit amet"
    },
    {
      title: "Package 3",
      imageUrl: "http://example.com/someimage.jpg",
      cost: 4000,
      description: "Lorem ipsum dolar sit amet"
    },
    {
      title: "Package 4",
      imageUrl: "http://example.com/someimage.jpg",
      cost: 5000,
      description: "Lorem ipsum dolar sit amet"
    },
    {
      title: "Package 5",
      imageUrl: "http://example.com/someimage.jpg",
      cost: 6000,
      description: "Lorem ipsum dolar sit amet"
    }
  ];

  // Hotels 
  const hotels = [
    {
      name: "Sample Hotel 1",
      street1: "123 Hotel Way",
      street2: "",
      city: "Hotelville",
      state: "KS",
      zip: "99076"
    },
    {
      name: "Sample Hotel 2",
      street1: "123 Hotel Way",
      street2: "",
      city: "Hotelville",
      state: "KS",
      zip: "99076"
    },
    {
      name: "Sample Hotel 3",
      street1: "123 Hotel Way",
      street2: "",
      city: "Hotelville",
      state: "KS",
      zip: "99076"
    },
    {
      name: "Sample Hotel 4",
      street1: "123 Hotel Way",
      street2: "",
      city: "Hotelville",
      state: "KS",
      zip: "99076"
    },
    {
      name: "Sample Hotel 5",
      street1: "123 Hotel Way",
      street2: "",
      city: "Hotelville",
      state: "KS",
      zip: "99076"
    }
  ]

  // delete existing reservations
  await Reservation.deleteMany();

  // customer 1
  await Reservation.create({
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: customer1,
    checker: undefined,
    package: packages[0],
    hotel: hotels[0],
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {}
  });

  await Reservation.create({
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: customer1,
    checker: checker1,
    package: packages[0],
    hotel: hotels[0],
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {}
  });

  await Reservation.create({
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: customer1,
    checker: checker2,
    package: packages[1],
    hotel: hotels[1],
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {}
  });

  // customer 2
  await Reservation.create({
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: customer2,
    checker: checker3,
    package: packages[2],
    hotel: hotels[2],
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {}
  });

  await Reservation.create({
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: customer2,
    checker: checker1,
    package: packages[0],
    hotel: hotels[2],
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {}
  });

  await Reservation.create({
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: customer2,
    checker: undefined,
    package: packages[2],
    hotel: hotels[2],
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {}
  });

  // customer 3
  await Reservation.create({
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: customer3,
    checker: undefined,
    package: packages[3],
    hotel: hotels[1],
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {}
  });

  await Reservation.create({
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: customer3,
    checker: checker3,
    package: packages[4],
    hotel: hotels[4],
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {}
  });

  await Reservation.create({
    createdAt: "",
    claimedAt: "",
    completedAt: "",
    customer: customer3,
    checker: checker2,
    package: packages[3],
    hotel: hotels[2],
    feedback: {},
    checkIn: "",
    confirmationKey: "AbCGe45Jk",
    instructions: "Lorem ipsum dolar sit amet.",
    options: {}
  });

  console.log('reservations seeded');

  process.exit();
});