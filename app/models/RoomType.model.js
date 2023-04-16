const mongoose = require('mongoose')

const { Schema } = mongoose

const RoomTypeSchema = new Schema(
    {
        room_type: {
            type: String,
            required: true,
            trim: true,
        }
    }
)