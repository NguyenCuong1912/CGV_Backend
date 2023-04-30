const mongoose = require("mongoose");
const { Schema } = mongoose;

const CinemaSchema = new Schema(
  {
    cinema_name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    province: {
      type: String,
      required: true,
      trim: true,
    },
    position: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    images: [{ image: String }],
    fax: {
      type: String,
      required: true,
      trim: true,
    },
    active: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const Cinema = mongoose.model("Cinema", CinemaSchema);

module.exports = { Cinema };
