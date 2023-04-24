const { KeyConst } = require("../constants/index");
const { News } = require("../models/News.model");
// const {}
const { Status, resData } = KeyConst;
const CreateNews = async (req, res) => {
  const { body, file } = req;
  const { title, content, startTime, endTime } = body;
  try {
    if (!file.path) {
      resData(res, Status.data_exists, "ImageNew is require");
    }
    if (file.path) {
      const newsImage = await file.path.replace(/\\/g, "/");
      const news = await News.create({
        title,
        content,
        startTime,
        endTime,
        newsImage,
      });
      resData(res, Status.created, news);
    }
  } catch (error) {
    resData(res, Status.error, error);
  }
};
// ! Read all News
const ReadAllNews = async (req, res) => {
  const { page = 1, limit = 10 } = req.query;
  try {
    const listNews = await News.find({ active: true })
      .skip((page - 1) * limit)
      .limit(limit);
    resData(res, Status.success, listNews);
  } catch (error) {
    resData(res, Status.error, error);
  }
};
// ! Read only news
const ReadNews = async (req, res) => {
  const { detail } = req;
  try {
    resData(res, Status.success, detail);
  } catch (error) {
    resData(res, Status.error, error);
  }
};
const UpdateNews = async (req, res) => {
  const { file, body, detail } = req;
  const { title, content, startTime, endTime } = body;
  try {
    if (file.path) {
      const newsImage = await file.path.replace(/\\/g, "/");
      detail.newsImage = newsImage;
    }
    detail.title = title;
    detail.content = content;
    detail.startTime = startTime;
    detail.endTime = endTime;
    await detail.save();
    resData(res, Status.success, detail);
  } catch (error) {
    resData(res, Status.error, error);
  }
};
const DeleteNews = async (req, res) => {
  const { detail } = req;
  try {
    detail.active = false;
    await detail.save();
    resData(res, Status.success, detail);
  } catch (error) {
    resData(res, Status.error, error);
  }
};
module.exports = {
  CreateNews,
  ReadAllNews,
  ReadNews,
  UpdateNews,
  DeleteNews,
};
