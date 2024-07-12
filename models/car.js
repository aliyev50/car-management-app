const mongoose = require('mongoose');

const CarSchema = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    }
});

const Car = mongoose.model('Car', CarSchema);

module.exports = Car;
