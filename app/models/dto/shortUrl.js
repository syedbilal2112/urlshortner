var mongoose = require('mongoose'),
    Schema = mongoose.Schema;
const { nanoid } = require('nanoid')
var shortUrlSchema = new Schema({

    /****************************************************************
     *                          columns
     ****************************************************************/

    longUrl: {
        type: String,
        required: true
    },

    shortUrl: {
        type: String,
        required: true,
        unique: true,
        default: nanoid(10)
    }
}, {
    timestamps: true
});

const shortUrl = mongoose.model('ShortUrl', shortUrlSchema);
module.exports = shortUrl;