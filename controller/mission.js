/**
 * Created by MadCage on 2017/4/20.
 */

var missionMethod = require('../dao/missDAO').missMethod;

exports.showMiss = function (req, res) {
        var data = {sort: [['createTime', -1]]};
        missionMethod.findAll(null, null, {sort: {'createTime': -1}}, function (err, doc) {
                if(!err){
                        res.send(doc);
                }else {
                        res.send({
                                code: 201,
                                msg: 'Error'
                        });
                        console.log(err);
                }
        });
};

exports.delMiss = function (req, res) {
        var data = {_id: {$in: req.body.misspid}};
        missionMethod.remove(data, function (err) {
                if(!err){
                        res.send({code:200, msg:'删除成功!'});
                }else{
                        res.send({code:201, msg:'删除失败!'});
                }
        });
};

exports.chaMiss = function (req, res) {
        var id = {_id: req.body.misspid};
        var data = {$set: {misssta: '已审核'}};
        missionMethod.changeStat(id, data, function (err) {
                if(!err){
                        res.send({code:200, msg:'修改成功!'});
                }else{
                        res.send({code:201, msg:'修改失败!'});
                }
        });
};

exports.saveMiss = function (req, res) {
        var data ={
                misstime: req.body.misstime,
                misslang: req.body.misslang,
                missinfo: req.body.missinfo,
                missmann: req.body.missmann,
                missloc: req.body.missloc,
                misstsa: "未审核"
        };
        missionMethod.save(data, function (err) {
                if(!err){
                        res.send({code:200, msg:'增加成功!'});
                }else{
                        res.send({code:201, msg:'增加失败!'});
                }
        });
};


