const express = require('express');
const { CreateRole, DeleteRole, ReadRoles, UpdateRole, ReadRole } = require('../controllers/Roles.controller');
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { Roles } = require('../models/Roles.model');

const roleRouter = express.Router();
roleRouter.get('/', ReadRoles);
roleRouter.get('/:id', CheckExists(Roles), ReadRole)
roleRouter.post('/', CreateRole);
roleRouter.put('/:id', CheckExists(Roles), UpdateRole)
roleRouter.delete('/:id', CheckExists(Roles), DeleteRole);
module.exports = { roleRouter }