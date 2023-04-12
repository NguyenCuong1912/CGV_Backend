const express = require('express');
const { roleRoute } = require('./Roles.route');
const { accountRoute } = require('./Accounts.route');
const { routeRank } = require('./Ranks.router');

const rootRouter = express.Router();

rootRouter.use('/roles', roleRoute)
rootRouter.use('/accounts', accountRoute)
rootRouter.use('/ranks', routeRank)
module.exports = { rootRouter }