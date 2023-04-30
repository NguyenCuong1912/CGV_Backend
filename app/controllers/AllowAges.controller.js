const { KeyConst } = require("../constants/index");
const { AllowAge } = require("../models/AllowAges.model");
const { resData, Status } = KeyConst;
const CreateAllowAge = async (req, res) => {
  const { body, file } = req;
  const { groupName, description } = body;
  try {
    if (file?.path) {
      const image = await file.path.replace(/\\/g, "/");
      const newAllowAge = await AllowAge.create({
        groupName,
        description,
        image,
      });
      resData(res, Status.created, newAllowAge);
    } else {
      resData(res, Status.forbidden, "Image missing");
    }
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const ReadAllowAges = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const allowAges = await AllowAge.find({ active: true })
      .skip((page - 1) * limit)
      .limit(limit);
    resData(res, Status.success, allowAges);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const ReadAllowAge = async (req, res) => {
  const { detail } = req;
  try {
    resData(res, Status.success, detail);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const DeleteAllowAge = async (req, res) => {
  const { detail } = req;
  detail.active = false;
  await detail.save();
  resData(res, Status.success, detail);
  try {
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const UpdateAllowAge = async (req, res) => {
  const { body, file, detail } = req;
  const { groupName, description } = body;
  try {
    detail.groupName = groupName;
    detail.description = description;
    if (file?.path) {
      const image = await file.path.replace(/\\/g, "/");
      detail.image = image;
    }
    await detail.save();
    resData(res, Status.success, detail);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
module.exports = {
  CreateAllowAge,
  ReadAllowAge,
  ReadAllowAges,
  UpdateAllowAge,
  DeleteAllowAge,
};
