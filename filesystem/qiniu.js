/**
 * Created by MadCage on 2017/4/26.
 */
var qn = require('qn');


var client = qn.create({
        accessKey: 'sa2y8AkysK7eAbXHAq_CmVJrKMKpULFqh7rnXlo-',
        secretKey: '9JMzHQ65bYB15K4tqWlp11czJJrjUufQusm2CmUk',
        bucket: 'missions',
        origin: 'http://http://missions.u.qiniudn.com',
        uploadURL: 'http://up-z1.qiniu.com/'
});

exports.upfile = function (req, res) {
        var filepath = "./uploads/" + req.body.filename;
        client.uploadFile(filepath, {key: req.body.filename}, function (err, result) {
                if(!err){
                        res.send({
                                code: 200,
                                msg: result.key
                        });
                        console.log(result);
                }else {
                        res.send({
                                code: 201,
                                msg: 'Upload Falied!'
                        });
                        console.log(err);
                }
        })
};

