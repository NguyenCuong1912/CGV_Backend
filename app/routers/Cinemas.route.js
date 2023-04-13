const express = require('express');
const { CreateCinema, ReadCinemas, ReadCinema, DeleteCinema, UpdateCinema } = require('../controllers/Cinemas.controller');
const { authentication } = require('../middlewares/auth/authentication/authentication')
const { AuthorizationAdmin } = require('../middlewares/auth/authorization/authorization')
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { Cinema } = require('../models/Cinemas.model');
const cinemaRoute = express.Router();

cinemaRoute.post('/', authentication, AuthorizationAdmin, CreateCinema)
cinemaRoute.get('/', ReadCinemas)
cinemaRoute.get('/:id', CheckExists(Cinema), ReadCinema)
cinemaRoute.delete('/:id', authentication, AuthorizationAdmin, CheckExists(Cinema), DeleteCinema)
cinemaRoute.put('/:id', authentication, AuthorizationAdmin, CheckExists(Cinema), UpdateCinema)
module.exports = { cinemaRoute }