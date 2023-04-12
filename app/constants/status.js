
const Status = {
    success: 200,
    created: 201,
    bad_request: 400,
    unauthorize: 401,
    forbidden: 403,
    data_exists: 422,
    not_found: 404,
    sever_error: 500,

}
const resData = (res, status, data) => {
    return res.status(status).send(data)

}
module.exports = { Status, resData };