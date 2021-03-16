'use strict';

/**
 *  Import DTO 
 */
const shortUrl = require('../dto/shortUrl');

/*
 * Add ShortUrl
 */
exports.addShortUrl = async (queryparam) => {
    return new Promise(async function (resolve, reject) {
        try {
            var query = {
                longUrl: queryparam.longUrl
            };
            resolve(shortUrl.create(query));
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
};

exports.getOne = (cond) => {
    return new Promise(async function (resolve, reject) {
        try {
            resolve(shortUrl.findOne(cond));
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
};

exports.getAll = () => {
    return new Promise(async function (resolve, reject) {
        try {
            resolve(shortUrl.find({}));
        } catch (err) {
            console.log(err);
            reject(err);
        }
    });
};
