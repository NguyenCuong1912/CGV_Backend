const mongoose = require("mongoose");
const { Schema } = mongoose;

const ShowtimeSchema = new Schema(
  {
    film: {
      type: "ObjectId",
      ref: "Film",
    },
    price: {
      type: Schema.Types.Number,
      required: true,
    },
    showdate: {
      type: Schema.Types.Date,
      required: true,
    },
    cinema: {
      type: "ObjectId",
      ref: "Cinema",
    },
    room: {
      type: "ObjectId",
      ref: "Room",
    },
    active: {
      type: Schema.Types.Boolean,
      default: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const Showtime = mongoose.model("Showtime", ShowtimeSchema);

module.exports = {
  Showtime,
};
