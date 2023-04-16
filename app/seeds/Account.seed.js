const { hashpassword } = require('../middlewares/bcrypt')
const { Account } = require('../models/Accounts.model')
const { Role } = require('../models/Roles.model')
const { KeyConst } = require('../constants');
const { ROLE_ADMIN } = KeyConst.RoleConst
const MigrateAccount = () => {
    Account.find()
        .then(async data => {
            if (data.length === 0) {
                const roleAdmin = await Role.findOne({ role_type: ROLE_ADMIN.type })
                const value = {
                    email: "admin@gmail.com",
                    password: hashpassword('123456'),
                    fullname: "Admin",
                    role: roleAdmin.id,
                    phonenumber: '0962458201'

                }
                console.log("data", value)
                Account.create(value)
            }
        })
        .catch(err => { })
}

module.exports = { MigrateAccount }