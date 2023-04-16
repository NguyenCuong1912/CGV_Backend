const { KeyConst } = require('../../../constants/index')
const { resData } = require('../../../constants/status')
const { RoleConst, Status } = KeyConst
const { ROLE_ADMIN, ROLE_STAFF } = RoleConst

const Authorization = async (req, res, next) => {
    const { role } = req.account.data
    if ([ROLE_ADMIN.type, ROLE_STAFF.type].includes(role)) {
        next();
    } else {
        resData(res, Status.unauthorize, "You not access")
    }
}
const AuthorizationAdmin = async (req, res, next) => {
    const { role } = req.account.data
    if ([ROLE_ADMIN.type].includes(role)) {
        next();
    } else {
        resData(res, Status.unauthorize, "You not access")
    }
}


module.exports = {
    Authorization,
    AuthorizationAdmin
}
