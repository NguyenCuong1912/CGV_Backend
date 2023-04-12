const mongoose = require('mongoose');

const { Schema } = mongoose;
const roleSchema = new Schema(
    {
        role_type: {
            type: String,
            required: true,
            uppercase: true,
            trim: true,
            unique: true
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
    {
        timestamps: true,
        versionKey: false,
    }
)
const Role = mongoose.model('Role', roleSchema);


module.exports = { Role }
