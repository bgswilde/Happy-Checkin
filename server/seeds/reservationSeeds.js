const Reservation = require('../models/Reservation');
const mongoose = require('mongoose');

const reservationSeeds = [
    new Reservation {
        customerId: "619d74d876ef801b1f768ddf",
        checkerId: "",
        createdAt: "",
        claimedAt: "",
        completedAt: "",
        customer: {},
        checker: {},
        package: {},
        hotel: {
          name: "Sample Hotel",
          street1: "123 Hotel Way",
          street2: "",
          city: "Hotelville",
          state: "KS",
          zip: "99076"
        },
        feedback: {},
        checkIn: "",
        confirmationKey: "AbCGe45Jk",
        instructions: "Lorem ipsum dolar sit amet.",
        options: {},
        status: "active"
      }
]

// const newReservations = [
//     new Reservation({
//         checkIn: "December 1st, 2021 12:30pm",
//         confirmationKey: "123456789",
//         instructions: "Please check me in quickly",
//         hotel: [{
//             name: "Brian's Place",
//             street1: "5016 Conser St.",
//             city: "Overland Park",
//             state: "KS",
//             zip: 66202
//         }]
//     }),
//     new Reservation({
//         checkIn: "December 2nd, 2021 3:30pm",
//         confirmationKey: "987654321",
//         instructions: "Can you fluff the pillows a bit? Thanks!",
//         hotel: [{
//             name: "Brian's Place",
//             street1: "5016 Conser St.",
//             city: "Overland Park",
//             state: "KS",
//             zip: 66202
//         }]
//     }),
//     new Reservation({
//         checkIn: "January 14th, 2022 1:30pm",
//         confirmationKey: "abcdefghi",
//         instructions: "Please set the alarm clock for 5:30 tomorrow morning",
//         hotel: [{
//             name: "Brian's Place",
//             street1: "5016 Conser St.",
//             city: "Overland Park",
//             state: "KS",
//             zip: 66202
//         }]
//     }),
//     new Reservation({
//         checkIn: "February 28th, 2022 5:00pm",
//         confirmationKey: "1a1a1a1a1",
//         instructions: "I like a nice cold room, so could you set the ac to 67 degrees F?",
//         hotel: [{
//             name: "Brian's Place",
//             street1: "5016 Conser St.",
//             city: "Overland Park",
//             state: "KS",
//             zip: 66202
//         }]
//     }),
//     new Reservation({
//         checkIn: "November 30th, 2021 4:15pm",
//         confirmationKey: "2b2b2b2b2",
//         instructions: "Flush the toilet once before I arrive to make sure it works please.",
//         hotel: [{
//             name: "Brian's Place",
//             street1: "5016 Conser St.",
//             city: "Overland Park",
//             state: "KS",
//             zip: 66202
//         }]
//     })
// ]

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/happy-checkIn', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
})
.catch(err => {
    console.log(err);
    process.exit(1);
})
.then(() => {
    console.log("Seeder file connected to database");
});

newReservations.map(async (r, index) => {
    await r.save((err, result) => {
        if (index === newReservations.length - 1) {
            console.log("Reservations seeded sucessfully");
            mongoose.disconnect();
        }
    })
})