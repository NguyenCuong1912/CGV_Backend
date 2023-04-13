const express = require('express');
const { authentication } = require('../middlewares/auth/authentication/authentication');
const { AuthorizationAdmin } = require('../middlewares/auth/authorization/authorization');
const { CreateSnack, ReadSnacks, ReadSnack, UpdateSnack, DeleteSnack } = require('../controllers/Snacks.controller');
const { UploadImage } = require('../middlewares/multer/upload');
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { Snack } = require('../models/Snacks.model');

const routeSnack = express.Router();

routeSnack.post('/', authentication, AuthorizationAdmin, UploadImage('snacks'), CreateSnack);
routeSnack.get('/', ReadSnacks);
routeSnack.get('/:id', CheckExists(Snack), ReadSnack);
routeSnack.put('/:id', authentication, AuthorizationAdmin, CheckExists(Snack), UploadImage('snacks'), UpdateSnack);
routeSnack.delete('/:id', authentication, AuthorizationAdmin, CheckExists(Snack), DeleteSnack);

module.exports = {
    routeSnack
}