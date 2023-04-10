const mongoose = require('mongoose')

const { Schema } = mongoose;
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const accountSchema = new Schema({
    email: {
        type: String,
        unique: true,
        index: { unique: true },
        required: "Email address is required",
        lowercase: true,
        validate: [validateEmail, 'Please fill a valid email address'],
        match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address'],
        trim: true
    },
    password: {
        type: String,
        required: "Password  is required",
        trim: true,
    },
    fullname: {
        type: String,
        required: "Fullname  is required",
        trim: true,
        uppercase: true
    },
    phonenumber: {
        type: String,
        required: 'Phonenumber is required',
        // match: /^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/
    },
    avatar: {
        type: String
    },
    block: {
        type: Boolean,
        default: false
    },
    active: {
        type: Boolean,
        default: true
    }
})
const Accounts = mongoose.model('Accounts', accountSchema)
module.exports = { Accounts }