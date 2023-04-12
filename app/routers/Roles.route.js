const express = require('express');
const { CreateRole, DeleteRole, ReadRoles, UpdateRole, ReadRole } = require('../controllers/Roles.controller');
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { Role } = require('../models/Roles.model');
const { authentication } = require('../middlewares/auth/authentication/authentication');
const { AuthorizationAdmin } = require('../middlewares/auth/authorization/authorization');

const roleRoute = express.Router();
roleRoute.get('/', authentication, AuthorizationAdmin, ReadRoles);
roleRoute.get('/:id', authentication, AuthorizationAdmin, CheckExists(Role), ReadRole)
roleRoute.post('/', authentication, AuthorizationAdmin, CreateRole);
roleRoute.put('/:id', authentication, AuthorizationAdmin, CheckExists(Role), UpdateRole)
roleRoute.delete('/:id', authentication, AuthorizationAdmin, CheckExists(Role), DeleteRole);
module.exports = { roleRoute }