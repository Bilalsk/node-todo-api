const mongoose = require('mongoose');
const validator = require('validator');

var User = mongoose.model('User', {
    email: {
        required: true,
        trim: true,
        type: String,
        minlength: 1,
        unique: true,
        validate: {
            validator: (value) => {
                return validator.isEmail(value);
            },
            message: '{VALUE} is not an Email'
        }
    },
    password: {
        required: true,
        type: String,
        minlength:6
    },
    tokens: [{
        access: {
            required: true,
            type: String
        },
        token: {
            required: true,
            type: String
        }
    }]
    });

module.exports = {
    User
};