const express = require("express");
const {
  authentication,
} = require("../middlewares/auth/authentication/authentication");
const {
  CheckExists,
} = require("../middlewares/validation/CheckExists.middleware");
const { UploadImage } = require("../middlewares/multer/upload");
const {
  Authorization,
  AuthorizationAdmin,
} = require("../middlewares/auth/authorization/authorization");
const {
  ReadAllowAges,
  ReadAllowAge,
  UpdateAllowAge,
  CreateAllowAge,
  DeleteAllowAge,
} = require("../controllers/AllowAges.controller");
const { AllowAge } = require("../models/AllowAges.model");
const allowAgeRoute = express.Router();

allowAgeRoute.get("/", authentication, ReadAllowAges);
allowAgeRoute.get("/:id", authentication, CheckExists(AllowAge), ReadAllowAge);
allowAgeRoute.put(
  ":/id",
  authentication,
  AuthorizationAdmin,
  CheckExists(AllowAge),
  UpdateAllowAge
);
allowAgeRoute.post("/", authentication, AuthorizationAdmin, CreateAllowAge);
allowAgeRoute.delete(
  "/:id",
  authentication,
  AuthorizationAdmin,
  CheckExists(AllowAge),
  DeleteAllowAge
);
