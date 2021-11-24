const mongoose = require('mongoose');

const { Schema } = mongoose;

const PackageSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    imageUrl: {
        type: String,
        required: true
    },
    cost: {
        type: Number,
        required: true
    },
    description: {
        type: String
    }
})


module.exports = PackageSchema;