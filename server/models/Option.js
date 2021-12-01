const mongoose = require('mongoose');

const { Schema } = mongoose;

const OptionSchema = new Schema({
    towels: {
        type: Boolean
    },
    pillows: {
        type: Boolean
    },
    down: {
        type: Boolean
    },
    rollaway: {
        type: Boolean
    },
    ice: {
        type: Boolean
    }
});

module.exports = OptionSchema;