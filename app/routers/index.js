const express = require('express');
const { roleRouter } = require('./Roles.route');

const rootRouter = express.Router();

rootRouter.use('/roles', roleRouter)

module.exports = { rootRouter }