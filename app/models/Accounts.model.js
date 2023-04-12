const mongoose = require('mongoose')

const { Schema } = mongoose;
const { KeyConst } = require('../constants');
const { Bronze } = KeyConst.RankConst
const validateEmail = function (email) {
    var re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    return re.test(email)
};
const accountSchema = new Schema(
    {
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
            // select: false
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
        point: {
            type: Number,
            default: 0
        },
        rank: {
            rank_type: {
                type: String,
                default: Bronze.type
            },
            rank_name: {
                type: String,
                default: Bronze.name
            }
        },
        role: {
            type: 'ObjectId', ref: 'Role'
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
    },
    {
        timestamps: true,
        versionKey: false,

    })
const Account = mongoose.model('Account', accountSchema)
module.exports = { Account }