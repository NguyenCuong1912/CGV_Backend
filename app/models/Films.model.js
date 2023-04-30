const mongoose = require("mongoose");
const { Schema } = mongoose;

const FilmSchema = Schema(
  {
    film_type: {
      type: Schema.Types.Array,
      required: true,
      trim: true,
    },
    film_name: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },
    film_image: {
      type: String,
      required: true,
    },
    date_start: {
      type: Schema.Types.Date,
      required: true,
    },
    time_of_film: {
      type: Schema.Types.String,
      required: true,
    },
    allowAge: {
      type: "ObjectId",
      ref: "AllowAge",
    },
    numberLike: {
      type: Schema.Types.Number,
      default: 0,
    },
    director: {
      type: Schema.Types.String,
      required: true,
    },
    actor: {
      type: Schema.Types.Array,
      default: [],
    },
    film_trailler: {
      type: Schema.Types.String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
    },
    film_rate: {
      type: Schema.Types.Number,
      default: 0,
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
const Film = mongoose.model("Film", FilmSchema);

module.exports = {
  Film,
};
