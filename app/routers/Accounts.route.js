const express = require('express');
const { SignIn, SignUp, ReadAccounts, ReadAccount, UpdateAccount } = require('../controllers/Accounts.controller');
const { authentication } = require('../middlewares/auth/authentication/authentication');
const { Account } = require('../models/Accounts.model');
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { UploadImage } = require('../middlewares/multer/upload');
const { Authorization } = require('../middlewares/auth/authorization/authorization');

const accountRoute = express.Router();
accountRoute.get('/', authentication, Authorization, ReadAccounts)
accountRoute.get('/:id', authentication, CheckExists(Account), ReadAccount)
accountRoute.put('/:id', authentication, CheckExists(Account), UploadImage('avatar'), UpdateAccount)
accountRoute.post('/signup', SignUp)
accountRoute.post('/signin', SignIn)


module.exports = {
    accountRoute
}