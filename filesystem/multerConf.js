/**
 * Created by MadCage on 2017/4/26.
 */
var multer = require('multer');

var storage = multer.diskStorage({
        destination: function (req, file, cb) {
                cb(null, './uploads')
        },
        filename: function (req, file, cb) {
                cb(null, file.originalname);
        }
});

var locupload = multer({
        storage: storage
});

module.exports = locupload;