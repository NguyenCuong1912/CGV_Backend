const express = require('express');
const { roleRoute } = require('./Roles.route');
const { accountRoute } = require('./Accounts.route');
const { rankRoute } = require('./Ranks.route');
const { snackRoute } = require('./Snacks.route');
const { cinemaRoute } = require('./Cinemas.route');
const { newsRoute } = require('./News.route');
const { codeRoute } = require('./Codes.route');

const rootRouter = express.Router();

rootRouter.use('/roles', roleRoute)
rootRouter.use('/accounts', accountRoute)
rootRouter.use('/ranks', rankRoute)
rootRouter.use('/snacks', snackRoute)
rootRouter.use('/cinemas', cinemaRoute)
rootRouter.use('/news', newsRoute)
rootRouter.use('/codes', codeRoute)
module.exports = { rootRouter }