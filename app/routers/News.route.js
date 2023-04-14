const express = require('express');
const { ReadAllNews, ReadNews, DeleteNews, CreateNews, UpdateNews } = require('../controllers/News.controller');
const { authentication } = require('../middlewares/auth/authentication/authentication');
const { AuthorizationAdmin, Authorization } = require('../middlewares/auth/authorization/authorization');
const { UploadImage } = require('../middlewares/multer/upload');
const { CheckExists } = require('../middlewares/validation/CheckExists.middleware');
const { News } = require('../models/News.model');
const newsRoute = express.Router();

newsRoute.get('/', ReadAllNews);
newsRoute.get('/:id', CheckExists(News), ReadNews)
newsRoute.delete('/:id', authentication, AuthorizationAdmin, CheckExists(News), DeleteNews)
newsRoute.post('/', authentication, AuthorizationAdmin, CheckExists(News), UploadImage('news'), CreateNews)
newsRoute.put('/:id', authentication, Authorization, UploadImage('news'), UpdateNews)

module.exports = {
    newsRoute
}