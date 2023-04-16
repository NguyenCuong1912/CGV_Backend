const express = require('express');
const { CreateCode, ReadCodes, ReadCode, UpdateCode, DeleteCode } = require('../controllers/Codes.controller');
const { authentication } = require('../middlewares/auth/authentication/authentication');
const { AuthorizationAdmin } = require('../middlewares/auth/authorization/authorization');
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { Code } = require('../models/Codes.model');
const codeRoute = express.Router();

codeRoute.post('/', authentication, AuthorizationAdmin, CreateCode);
codeRoute.get('/', authentication, AuthorizationAdmin, ReadCodes);
codeRoute.get('/:id', authentication, AuthorizationAdmin, CheckExists(Code), ReadCode)
codeRoute.put('/:id', authentication, AuthorizationAdmin, CheckExists(Code), UpdateCode)
codeRoute.delete('/:id', authentication, AuthorizationAdmin, CheckExists(Code), DeleteCode)
module.exports = {
    codeRoute
}