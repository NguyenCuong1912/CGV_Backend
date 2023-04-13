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
        const snacks = await Snack.find();
        resData(res, Status.success, snacks)
    } catch (error) {
        resData(res, Status.sever_error, error)
    }
}

module.exports = {
    CreateSnack,
    ReadSnacks
}