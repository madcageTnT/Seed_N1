/**
 * Created by MadCage on 2017/5/7.
 */
var messageMethod = require('../dao/msgDAO').msgMethod;

exports.saveMsg = function (req, res) {
        var data = {
                msgtitle: req.body.msgtitle,
                msghtml: req.body.msghtml
        };
        messageMethod.save(data, function (err) {
                if(!err){
                        res.send({code:200, msg:'发布成功!'});
                }else{
                        res.send({code:201, msg:'发布失败!'});
                }
        })
};