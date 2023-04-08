
const CheckExists = (Model) => {
    return async (req, res, next) => {
        const { id } = req.params;
        const dataExists = await Model.findOne({ _id: id, active: true })
        if (!!dataExists) {
            req.detail = dataExists;
            next()
        } else {
            res.status(404).send(`Not Found ID =${id}`)
        }
    }
}

module.exports = { CheckExists }