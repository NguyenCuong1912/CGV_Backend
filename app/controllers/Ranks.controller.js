const { resData } = require("../constants/status")
const { KeyConst } = require('../constants/index')
const { Rank } = require('../models/Ranks.model')
const { Status } = KeyConst
const ReadRanks = async (req, res) => {
    try {
        const ranks = await Rank.find();
        resData(res, Status.success, ranks)
    } catch (error) {
        resData(res, Status.error, error)
    }
}
const ReadRank = async (req, res) => {
    const { detail } = req;
    try {
        resData(res, Status.success, detail)
    } catch (error) {
        resData(res, Status.error, error)
    }
}
const UpdateRank = async (req, res) => {
    const { detail, body } = req
    const { point } = body;
    try {
        detail.point = point;
        await detail.save();
        resData(res, Status.success, detail)
    } catch (error) {
        resData(res, Status.error, error)
    }
}
module.exports = {
    ReadRanks,
    ReadRank,
    UpdateRank
}