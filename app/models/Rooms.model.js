const mongoose = require('mongoose')

const { Schema } = mongoose

const RoomsSchema = new Schema(
    {
        room_name: {
            type: String,
            required: true,
            trim: true,
        }
    }
)