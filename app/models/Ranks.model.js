const mongoose = require("mongoose")

const { Schema } = mongoose;
const RankSchema = new Schema(
    {
        rank_type: {
            type: String,
            required: true,
            trim: true,
            captialize: true,
            unique: true
        },
        rank_name: {
            type: String,
            required: true,
            trim: true,
            unique: true
        },
        point: {
            type: Number,
            required: true,
        },
        discount: {
            type: Number,
            requireed: true
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
const Rank = mongoose.model('Rank', RankSchema);


module.exports = { Rank }