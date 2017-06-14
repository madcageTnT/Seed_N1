/**
 * Created by MadCage on 2017/4/26.
 */
var conf = require('./multerConf');

var upload = conf.single('file');

exports.dataInput = function (req, res) {
        upload(req, res, function (err) {
                if(err){
                        return console.log(err);
                }else{
                        res.send({
                                code: 200,
                                msg: req.file.originalname
                        });
                }

        });
};

