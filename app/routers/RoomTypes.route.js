const express = require("express");
const {
  CreateRoomType,
  ReadRoomTypes,
  ReadRoomType,
  DeleteRoomType,
  UpdateRoomType,
} = require("../controllers/RoomTypes.controller");
const {
  authentication,
} = require("../middlewares/auth/authentication/authentication");
const {
  AuthorizationAdmin,
} = require("../middlewares/auth/authorization/authorization");
const {
  CheckExists,
} = require("../middlewares/validation/CheckExists.middleware");
const { UploadImage } = require("../middlewares/multer/upload");
const { RoomType } = require("../models/RoomTypes.model");
const roomTypeRoute = express.Router();

roomTypeRoute.post(
  "/",
  authentication,
  AuthorizationAdmin,
  UploadImage("roomtypes", true),
  CreateRoomType
);
roomTypeRoute.get("/", authentication, ReadRoomTypes);
roomTypeRoute.get("/:id", authentication, CheckExists(RoomType), ReadRoomType);
roomTypeRoute.delete(
  "/:id",
  authentication,
  AuthorizationAdmin,
  CheckExists(RoomType),
  DeleteRoomType
);
roomTypeRoute.put(
  "/:id",
  authentication,
  AuthorizationAdmin,
  CheckExists(RoomType),
  UpdateRoomType
);

module.exports = {
  roomTypeRoute,
};
