const mongoose = require("mongoose")

const { Schema } = mongoose
const NewsSchema = new Schema(
    {
        title: {
            type: String,
            required: true,
            uppercase: true,
            trim: true
        },
        content: {
            type: String,
        },
        newsImage: {
            type: String,
            required: true
        },
        startTime: {
            type: Date,
            required: true,
        },
        endTime: {
            type: Date,
            required: true,
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
const News = mongoose.model('News', NewsSchema)
module.exports = { News }