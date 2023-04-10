const express = require('express');
const { CreateRole, DeleteRole, ReadRoles, UpdateRole, ReadRole } = require('../controllers/Roles.controller');
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { Roles } = require('../models/Roles.model');

const roleRoute = express.Router();
roleRoute.get('/', ReadRoles);
roleRoute.get('/:id', CheckExists(Roles), ReadRole)
roleRoute.post('/', CreateRole);
roleRoute.put('/:id', CheckExists(Roles), UpdateRole)
roleRoute.delete('/:id', CheckExists(Roles), DeleteRole);
module.exports = { roleRoute }