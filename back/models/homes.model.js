const mongoose = require('mongoose');

const homeschema = new mongoose.Schema({
    title: {
        type: String,
        minlength: [10, "10 characters minimum"],
        required : true,
    },
    price: {
        type: Number,
        min: 1,
        required : true
    },
    address: {
        type: String,
        required: [true, 'Address is required']
    },
    createdAt: {
        type: Number,
        default: Date.now() // Get a timestamp :) 
    },
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user',
        required : true
    },
    occupied: {
        type: Boolean,
        default: false,
        required: true
    },
    tenants: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'user'
        }
    ]


});

const home = mongoose.model('home', homeschema);

module.exports = home;