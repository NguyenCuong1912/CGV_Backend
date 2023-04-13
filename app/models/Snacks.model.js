const mongoose = require('mongoose')

const { Schema } = mongoose;
const SnackSchema = new Schema(
    {
        snack_type: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        snack_name: {
            type: String,
            required: true,
            trim: true,
        },
        description: {
            type: String,
            required: true,
            trim: true
        },
        image: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: String,
            required: true,
            trim: true
        },
        discount: {
            type: Number,
            default: 0
        },
        active: {
            type: String,
            default: true
        }
    },
    {
        timestamps: true,
        versionKey: false,
    }
)
const Snack = mongoose.model('Snack', SnackSchema);

module.exports = {
    Snack
}