const { resData, Status } = require("../constants/status");
const { Cinema } = require("../models/Cinemas.model");

const CreateCinema = async (req, res) => {
  const { cinema_name, province, position, fax } = req.body;
  try {
    const checkCinema = await Cinema.findOne({ cinema_name });
    if (!checkCinema) {
      const newCinema = await Cinema.create({
        cinema_name,
        province,
        position,
        fax,
      });
      resData(res, Status.created, newCinema);
    } else {
      resData(res, Status.data_exists, "Cinema is exists");
    }
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const ReadCinemas = async (req, res) => {
  try {
    const cinemas = await Cinema.find({ active: true });
    resData(res, Status.success, cinemas);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const ReadCinema = async (req, res) => {
  const { detail } = req;
  try {
    resData(res, Status.success, detail);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const DeleteCinema = async (req, res) => {
  const { detail } = req;
  try {
    detail.active = false;
    await detail.save();
    resData(res, Status.success, detail);
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};
const UpdateCinema = async (req, res) => {
  const { detail, body } = req;
  const { cinema_name, province, position, fax } = body;
  try {
    detail.cinema_name = cinema_name;
    detail.province = province;
    detail.position = position;
    detail.fax = fax;
    await detail.save();
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};

// !! Update mutil image
// const UpdateImage = async (req, res) => {
//     const { detail } = req;
//     try {

//     } catch (error) {
//         resData(res, Status.sever_error, error)
//     }
// }
module.exports = {
  CreateCinema,
  ReadCinemas,
  ReadCinema,
  DeleteCinema,
  UpdateCinema,
  // UpdateImage
};
