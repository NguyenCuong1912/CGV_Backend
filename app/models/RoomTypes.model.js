const mongoose = require("mongoose");

const { Schema } = mongoose;

const RoomTypeSchema = new Schema(
  {
    name_type: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    image: {
      type: Schema.Types.Array,
    },
    description: {
      type: Schema.Types.String,
      required: true,
      trim: true,
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

const RoomType = mongoose.model("RoomType", RoomTypeSchema);

module.exports = {
  RoomType,
};
