const { RoomType } = require("../models/RoomTypes.model");
const { KeyConst } = require("../constants");

const { Status, resData } = KeyConst;
const CreateRoomType = async (req, res) => {
  const { body, files } = req;
  const { name_type, description } = body;
  try {
    if (files) {
      const arrImage = [];
      for (const file of files) {
        const image = await file.path.replace(/\\/g, "/");
        arrImage.push({ image });
      }
      const newRoomType = await RoomType.create({
        name_type,
        description,
        image: arrImage,
      });
      resData(res, Status.created, newRoomType);
    }
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const ReadRoomTypes = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const roomTypes = await RoomType.find({ active: true })
      .skip((page - 1) * limit)
      .limit(limit);
    resData(res, Status.success, roomTypes);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const ReadRoomType = async (req, res) => {
  const { detail } = req;
  try {
    resData(res, Status.success, detail);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const DeleteRoomType = async (req, res) => {
  const { detail } = req;
  detail.active = false;
  await detail.save();
  resData(res, Status.success, detail);
  try {
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
//! Pharese 2 update image
const UpdateRoomType = async (req, res) => {
  const { detail, body, files } = req;
  const { name_type, description } = body;
  try {
    detail.name_type = name_type;
    detail.description = description;
    await detail.save();
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};

module.exports = {
  CreateRoomType,
  ReadRoomTypes,
  ReadRoomType,
  DeleteRoomType,
  UpdateRoomType,
};
