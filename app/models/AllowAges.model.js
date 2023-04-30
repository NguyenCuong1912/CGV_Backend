const mongoose = require("mongoose");

const { Schema } = mongoose;

const AllowAgeSchema = new Schema(
  {
    groupName: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    description: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    image: {
      type: Schema.Types.String,
      required: true,
      trim: true,
    },
    active: {
      type: Schema.Types.Boolean,
      default: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const AllowAge = mongoose.model("AllowAge", AllowAgeSchema);

module.exports = {
  AllowAge,
};
