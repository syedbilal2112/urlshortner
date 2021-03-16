const express = require('express');
const constant = require('../../utils/constant');
const shortUrlDao = require('../models/dao/shortUrlDao');
const route = express.Router();


{
    route.get('/:id', (req, res) => {
        shortUrlDao.getOne({shortUrl:req.params.id}).then((result) => {
            res.redirect(result.longUrl);
        }).catch((error) => {
            res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
        });
    });

    route.get('/', (req, res) => {
        shortUrlDao.getAll().then((result) => {
            res.status(constant.HTML_STATUS_CODE.SUCCESS).json(result);
        }).catch((error) => {
            res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
        });
    });

    route.post('/', (req, res) => {
        shortUrlDao.addShortUrl(req.body).then((result) => {
            res.status(constant.HTML_STATUS_CODE.SUCCESS).json(result);
        }).catch((error) => {
            res.status(error.status || constant.HTML_STATUS_CODE.INTERNAL_ERROR).json(error);
        });
    });
}


module.exports = route;