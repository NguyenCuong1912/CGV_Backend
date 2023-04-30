const { KeyConst } = require("../constants");
const { Film } = require("../models/Films.model");
const { Status, resData } = KeyConst;
const CreateFilm = async (req, res) => {
  const { body, file } = req;
  const {
    film_type,
    film_name,
    date_start,
    time_of_film,
    director,
    actor,
    film_trailler,
    description,
  } = body;
  try {
    if (file?.path) {
      const film_image = await file.path.replace(/\\/g, "/");
      const newFilm = await Film.create({
        film_type,
        film_name,
        film_image,
        date_start,
        time_of_film,
        director,
        actor,
        film_trailler,
        description,
      });
      resData(res, Status.created, newFilm);
    }
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const ReadFilms = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const films = await Film.find({ active: true })
      .skip((page - 1) * limit)
      .limit(limit);
    resData(res, Status.success, films);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const ReadFilm = async (req, res) => {
  const { detail } = req;
  resData(res, Status.success, detail);
  try {
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const DeleteFilm = async (req, res) => {
  const { detail } = req;
  detail.active = false;
  await detail.save();
  resData(res, Status.success, detail);
  try {
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const UpdateFilm = async (req, res) => {
  const { body, file, detail } = req;
  const {
    film_type,
    film_name,
    film_image,
    date_start,
    time_of_film,
    director,
    actor,
    film_trailler,
    description,
  } = body;
  try {
    if (file?.path !== detail.film_image) {
      const film_image = await file.path.replace(/\\/g, "/");
      detail.film_image = film_image;
    }
    detail.film_type = film_type;
    detail.film_name = film_name;
    detail.date_start = date_start;
    detail.time_of_film = time_of_film;
    detail.director = director;
    detail.actor = actor;
    detail.film_trailler = film_trailler;
    detail.description = description;
    await detail.save();
    resData(res, Status.created, detail);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
module.exports = {
  CreateFilm,
  ReadFilms,
  ReadFilm,
  DeleteFilm,
  UpdateFilm,
};
