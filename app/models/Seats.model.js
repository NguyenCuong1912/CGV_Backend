const mongoose = require("mongoose");

const { Schema } = mongoose;

const SeatSchema = new Schema(
  {
    seat_name: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    seat_row: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    account: {
      type: "ObjectId",
      ref: "Account",
    },
    showtime: {
      type: "ObjectId",
      ref: "Showtime",
    },
    type_seat: {
      type: "ObjectId",
      ref: "TypeSeat",
    },
    price: {
      type: Schema.Types.Number,
      reuiqred: true,
    },
    booked: {
      type: Schema.Types.Boolean,
      default: false,
    },
  },
  { timestamps: true, versionKey: false }
);
const Seat = mongoose.model("Seat", SeatSchema);

module.exports = { Seat };
