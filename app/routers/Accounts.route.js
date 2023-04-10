const express = require('express');
const { SignIn, SignUp } = require('../controllers/Accounts.controller');

const accountRoute = express.Router();

accountRoute.post('/signup', SignUp)
accountRoute.post('/signin', SignIn)


module.exports = {
    accountRoute
}