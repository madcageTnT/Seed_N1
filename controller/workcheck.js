/**
 * Created by MadCage on 2017/4/24.
 */
var checkMethod = require('../dao/workDAO').workMethod;

exports.showCheck = function (req, res) {
        checkMethod.check(function (err, doc) {
                if(!err){
                        res.send(doc);
                }else {
                        res.send({
                                code: 201,
                                msg: 'error'
                        });
                        console.log(err);
                }
        })
};

exports.removeCheck = function (req, res) {
        var data = {_id: {$in: req.body.checkpid}};
        console.log(data);
        checkMethod.remove(data, function (err) {
                if(!err){
                        res.send({code:200, msg:'删除成功!'});
                }else{
                        res.send({code:201, msg:'删除失败!'});
                }
        });
};

exports.dropCheck = function (req, res) {
        checkMethod.drop(function (err) {
                if(!err){
                        res.send({code:200, msg:'清除成功!'});
                }else{
                        res.send({code:201, msg:'清除失败!'});
                }
        })
};

exports.saveCheck = function (req, res) {
        var data = {
                workname : req.body.checkname,//暂时定义
                workphone: req.body.checkphone,
                workup: req.body.uptime
        };
        checkMethod.save(data, function (err) {
                if(!err){
                        res.send({code:200, msg:'签到成功!'});
                }else{
                        res.send({code:201, msg:'签到失败!'});
                }
        });
};

exports.updateCheck = function (req, res) {
        var id = {_id: req.body.checkpid};
        var data = {workdown: req.body.downtime};
        checkMethod.update(id, data, function (err) {
                if(!err){
                        res.send({code:200, msg:'签退成功!'});
                }else{
                        res.send({code:201, msg:'签退失败!'});
                }
        });
};