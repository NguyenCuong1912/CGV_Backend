const { Role } = require("../models/Roles.model");

//  !!add new role
const CreateRole = async (req, res) => {
    const { role_type, role_name } = req.body;
    try {
        const checkExistsRole = await Role.find({ role_type: role_type });
        if (!!checkExistsRole.length) {
            res.status(401).send("Role Type is exists")
        } else {
            const newRole = await Role.create({ role_type, role_name })
            res.status(201).send(newRole)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}
// !! Getall Role
const ReadRoles = async (req, res) => {
    try {
        const roles = await Role.find({ active: true })
        res.status(200).send(roles)
    } catch (error) {
        res.status(500).send(error)
    }
}
// !! Read One
const ReadRole = async (req, res) => {
    try {
        res.status(200).send(req.detail)
    } catch (error) {
        res.status(500).send(error)
    }
}
// !! Update Role
const UpdateRole = async (req, res) => {
    const { role_name, role_type } = req.body;
    const { detail } = req;
    try {
        detail.role_name = role_name;
        detail.role_type = role_type;
        await detail.save();
        res.status(200).send(detail)

    } catch (error) {
        res.status(500).send(error)
    }
}
// !! Delete Role
const DeleteRole = async (req, res) => {
    const { id } = req.params;
    try {

        const roleDel = await Role.findById(id);
        roleDel.active = false;
        await roleDel.save();
        if (!!roleDel) {
            res.status(200).send(roleDel)
        }
    } catch (error) {
        res.status(500).send(error)
    }
}


module.exports = {
    CreateRole,
    DeleteRole,
    ReadRoles,
    UpdateRole,
    ReadRole

}