exports.PORT = 3000;
exports.HTML_STATUS_CODE = { SUCCESS: 200, CREATED: 201, UNAUTHORIZED: 401, INVALID_DATA: 406, CONFLICT: 409, INTERNAL_ERROR: 500, BAD_REQUEST: 400, NOT_FOUND: 404 };

exports.mongodb = {
    host: 'localhost',
    port: 27017,
    db: 'urlShortner',
    username: '',
    password: ''

}