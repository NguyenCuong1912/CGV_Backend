const express = require('express');
const { authentication } = require('../middlewares/auth/authentication/authentication');
const { AuthorizationAdmin } = require('../middlewares/auth/authorization/authorization');
const { CreateSnack, ReadSnacks } = require('../controllers/Snacks.controller');
const { UploadImage } = require('../middlewares/multer/upload');

const routeSnack = express.Router();

routeSnack.post('/', authentication, AuthorizationAdmin, UploadImage('snacks'), CreateSnack);
routeSnack.get('/', ReadSnacks)

module.exports = {
    routeSnack
}