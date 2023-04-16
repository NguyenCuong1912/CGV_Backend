const mongoose = require('mongoose')
const { Schema } = mongoose;

const CodeSchema = new Schema(
    {
        codeText: {
            type: String,
            required: true,
        },
        codeNumber: {
            type: Number,
            required: true
        },
        codeDiscount: {
            type: Number,
            required: true
        },
        account_using: [
            { type: 'ObjectId', ref: 'Account' }
        ],
        start_using: {
            type: Date,
            required: true
        },
        end_using: {
            type: Date,
            required: true
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
const Code = mongoose.model('Code', CodeSchema)
module.exports = { Code }