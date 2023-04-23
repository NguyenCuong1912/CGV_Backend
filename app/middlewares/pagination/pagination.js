const { resData } = require("../../constants/status");
const ReadDataPagination = (Model) => {
  return async (req, res, next) => {
    const { page = 1, limit = 10 } = req.query;
    try {
      const datas = await Model.find({ active: true })
        .skip((page - 1) * limit)
        .limit(limit);
      req.dataPagi = datas;
      next();
    } catch (error) {
      res.status(500).send(error);
    }
  };
};

module.exports = {
  ReadDataPagination,
};
