const express = require('express');
const { roleRoute } = require('./Roles.route');
const { accountRoute } = require('./Accounts.route');

const rootRouter = express.Router();

rootRouter.use('/roles', roleRoute)
rootRouter.use('/accounts', accountRoute)

module.exports = { rootRouter }