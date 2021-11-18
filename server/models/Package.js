const { Schema } = require('mongoose');

const PackageSchema = new Schema({
    title: {
        type: String,
        required: true,
        minlength: 1
    },
    description: {
        type: String,
        required: true,
        minlength: 1
    },
    detail: {
        type: String,
        required: true
    }
})


module.exports = PackageSchema;