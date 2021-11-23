const mongoose = require('mongoose');

const { Schema } = mongoose;

const FeedbackSchema = new Schema({
    rating: {
        type: Number,
        max: 5
    },
    body: {
        type: String,
        minlength: 1,
        maxlength: 300
    }
});

module.exports = FeedbackSchema;