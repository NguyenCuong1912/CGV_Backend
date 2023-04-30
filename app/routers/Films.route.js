const express = require("express");
const {
  ReadFilms,
  ReadFilm,
  UpdateFilm,
  DeleteFilm,
  CreateFilm,
} = require("../controllers/Films.controller");

const {
  authentication,
} = require("../middlewares/auth/authentication/authentication");
const {
  AuthorizationAdmin,
} = require("../middlewares/auth/authorization/authorization");
const filmRoute = express.Router();

filmRoute.get("/", ReadFilms);
filmRoute.get("/:id", ReadFilm);
filmRoute.post("/", authentication, AuthorizationAdmin, CreateFilm);
filmRoute.put("/:id", authentication, AuthorizationAdmin, UpdateFilm);
filmRoute.delete("/:id", authentication, AuthorizationAdmin, DeleteFilm);

module.exports = { filmRoute };
