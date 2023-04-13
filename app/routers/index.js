const express = require('express');
const { roleRoute } = require('./Roles.route');
const { accountRoute } = require('./Accounts.route');
const { routeRank } = require('./Ranks.route');
const { routeSnack } = require('./Snacks.route');

const rootRouter = express.Router();

rootRouter.use('/roles', roleRoute)
rootRouter.use('/accounts', accountRoute)
rootRouter.use('/ranks', routeRank)
rootRouter.use('/snacks', routeSnack)
module.exports = { rootRouter }