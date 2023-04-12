const { Role } = require('../models/Roles.model')
const { KeyConst } = require('../constants');
const { ROLE_ADMIN, ROLE_CLINET, ROLE_STAFF } = KeyConst.Role;

const MigrateRole = async () => {
    Role.find()
        .then(async (data) => {
            if (data.length === 0) {
                const roleAdmin = new Role({ role_type: ROLE_ADMIN.type, role_name: ROLE_ADMIN.name });
                const roleStaff = new Role({ role_type: ROLE_STAFF.type, role_name: ROLE_STAFF.name });
                const roleClient = new Role({ role_type: ROLE_CLINET.type, role_name: ROLE_CLINET.name });
                await roleAdmin.save();
                await roleClient.save();
                await roleStaff.save();
                // if (!!roleAdmin && !!roleClient && !!roleStaff) return "success"
            }
        }).catch(err => console.log(err))
}

module.exports = { MigrateRole }