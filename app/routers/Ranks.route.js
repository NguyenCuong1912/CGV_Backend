const express = require('express');
const { authentication } = require('../middlewares/auth/authentication/authentication');
const { ReadRanks, ReadRank, UpdateRank } = require('../controllers/Ranks.controller');
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { Rank } = require('../models/Ranks.model');
const { Authorization, AuthorizationAdmin } = require('../middlewares/auth/authorization/authorization');

const rankRoute = express.Router();

rankRoute.get('/', authentication, AuthorizationAdmin, ReadRanks)
rankRoute.get('/:id', authentication, AuthorizationAdmin, CheckExists(Rank), ReadRank)
rankRoute.put('/:id', authentication, AuthorizationAdmin, CheckExists(Rank), UpdateRank)
module.exports = {
    rankRoute
}