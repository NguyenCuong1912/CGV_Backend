const mongoose = require("mongoose");

const { Schema } = mongoose;

const RoomsSchema = new Schema(
  {
    room_name: {
      type: String,
      required: true,
      trim: true,
    },
    cinema: {
      type: "ObjectId",
      ref: "Cinema",
    },
    seat_number: {
      type: Schema.Types.Number,
      required: true,
    },
    room_type: {
      type: "ObjectId",
      ref: "RoomType",
    },
    active: {
      type: Schema.Types.Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Room = mongoose.model("Room", RoomsSchema);

module.exports = {
  Room,
};
