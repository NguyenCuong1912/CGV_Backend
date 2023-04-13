const express = require('express');
const { authentication } = require('../middlewares/auth/authentication/authentication');
const { AuthorizationAdmin } = require('../middlewares/auth/authorization/authorization');
const { CreateSnack, ReadSnacks, ReadSnack, UpdateSnack, DeleteSnack } = require('../controllers/Snacks.controller');
const { UploadImage } = require('../middlewares/multer/upload');
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { Snack } = require('../models/Snacks.model');

const snackRoute = express.Router();

snackRoute.post('/', authentication, AuthorizationAdmin, UploadImage('snacks'), CreateSnack);
snackRoute.get('/', ReadSnacks);
snackRoute.get('/:id', CheckExists(Snack), ReadSnack);
snackRoute.put('/:id', authentication, AuthorizationAdmin, CheckExists(Snack), UploadImage('snacks'), UpdateSnack);
snackRoute.delete('/:id', authentication, AuthorizationAdmin, CheckExists(Snack), DeleteSnack);

module.exports = {
    snackRoute
}