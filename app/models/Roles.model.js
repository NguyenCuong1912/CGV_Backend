const mongoose = require('mongoose')

const { Schema } = mongoose;

const roleSchema = new Schema(
    {
        role_type: {
            type: String,
            required: true,
            uppercase: true,
            trim: true
        },
        role_name: {
            type: String,
            required: true,
            uppercase: true,
            trim: true
        },
        active: {
            type: Boolean,
            default: true
        }
    },
    { timestamps: true }
)
const Roles = mongoose.model('Roles', roleSchema);
module.exports = { Roles }
