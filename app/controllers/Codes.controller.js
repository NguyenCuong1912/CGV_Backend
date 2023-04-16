const { KeyConst } = require("../constants")
const { Code } = require("../models/Codes.model")
const { Status, resData } = KeyConst
const CreateCode = async (req, res) => {
    const { codeText, codeNumber, codeDiscount, start_using, end_using } = req.body
    try {
        const _checkExistsCode = await Code.find({ codeText, active: true })
        //! code exists
        if (_checkExistsCode.length !== 0) {
            resData(res, Status.data_exists, "Code exists")
        }
        //! code not exists
        if (_checkExistsCode.length === 0) {
            const _newCode = await Code.create({ codeText, codeNumber, codeDiscount, start_using, end_using })
            resData(res, Status.created, _newCode)
        }
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}

const ReadCodes = async (req, res) => {
    try {
        const _codes = await Code.find({ active: true })
        resData(res, Status.success, _codes)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}
const ReadCode = async (req, res) => {
    const { detail } = req;
    try {
        resData(res, Status.success, detail)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}
const DeleteCode = async (req, res) => {
    const { detail } = req
    try {
        console.log(detail)
        detail.active = false;
        await detail.save();
        resData(res, Status.success, detail)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}
const UpdateCode = async (req, res) => {
    const { detail } = req;
    const { codeText, codeNumber, codeDiscount, start_using, end_using } = req.body
    try {
        detail.codeNumber = codeNumber;
        detail.codeDiscount = codeDiscount;
        detail.start_using = start_using;
        detail.end_using = end_using;
        if (detail.codeText === codeText) {
            resData(res, Status.success, detail)
            return;
        }
        const _checkExistsCode = await Code.find({ codeText, active: true })
        //! code exists
        if (_checkExistsCode.length !== 0) {
            resData(res, Status.data_exists, "Code exists")
            return;
        }
        //! code not exists
        if (_checkExistsCode.length === 0) {
            detail.codeText = codeText;
            await detail.save();
            resData(res, Status.created, detail)
        }
        resData(res, Status.success, detail)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}
module.exports = {
    CreateCode,
    ReadCodes,
    ReadCode,
    UpdateCode,
    DeleteCode
}