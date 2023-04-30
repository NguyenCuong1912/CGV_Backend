const { KeyConst } = require("../constants/index");
const { Seat } = require("../models/Seats.model");
const { resData, Status } = KeyConst;
const CreateSeat = async (req, res) => {
  try {
  } catch (error) {
    resData(res, Status.sever_error, error);
  }
};

module.exports = {
  CreateSeat,
};
