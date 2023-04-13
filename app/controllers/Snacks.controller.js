const { resData } = require("../constants/status")
const { KeyConst } = require('../constants');
const { Snack } = require("../models/Snacks.model");
const { Status } = KeyConst
const CreateSnack = async (req, res) => {
    const { body, file } = req;
    const { snack_type, snack_name, price, discount, description } = body;
    try {
        if (!file.path && snack_type && snack_name && description && price) {
            resData(res, Status.data_exists, "Data is not enough")
        }
        const value = {
            snack_type,
            snack_name,
            description,
            price,
            discount
        };
        if (file.path) {
            const image = await file.path.replace(/\\/g, '/');
            value.image = image;
        }
        const newSnack = await Snack.create(value);
        resData(res, Status.created, newSnack)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}
const ReadSnacks = async (req, res) => {
    try {
        const snacks = await Snack.find({ active: true });
        resData(res, Status.success, snacks)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}
const ReadSnack = async (req, res) => {
    const { detail } = req
    try {
        resData(res, Status.success, detail)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}
const UpdateSnack = async (req, res) => {
    const { detail, body, file } = req;
    const { snack_type, snack_name, descriptiom, price, discount } = body;
    try {
        detail.snack_name = snack_name
        detail.snack_type = snack_type
        detail.descriptiom = descriptiom
        detail.price = price
        detail.discount = discount
        if (file?.path !== detail.image) {
            const image = await file.path.replace(/\\/g, '/');
            detail.image = image;
        }
        await detail.save();
        resData(res, Status.success, detail)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}
const DeleteSnack = async (req, res) => {
    const { detail } = req;
    try {
        detail.active = false;
        await detail.save();
        resData(res, Status.success, detail)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}
module.exports = {
    CreateSnack,
    ReadSnacks,
    ReadSnack,
    UpdateSnack,
    DeleteSnack
}