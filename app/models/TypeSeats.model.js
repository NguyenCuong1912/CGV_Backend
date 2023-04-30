const mongoose = require("mongoose");

const { Schema } = mongoose;

const SchemaTypeSeat = new Schema(
  {
    type_name: {
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
const TypeSeat = mongoose.model("TypeSeat", SchemaTypeSeat);
module.exports = { TypeSeat };
