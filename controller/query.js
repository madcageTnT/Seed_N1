/**
 * Created by MadCage on 2017/4/26.
 */
var queryMethod  =require('../dao/queDAO').queMethod;
var moment = require('moment');
moment.locale('zh-cn');

exports.showQuery = function (req, res) {
        var condition = null;
        var fields = null;
        var options = [["_id", 1]];
        queryMethod.show(condition, fields, options,  function (err, doc) {
                if(!err){
                        res.send(doc);
                }else {
                        res.send({
                                code: 200,
                                msg:'FIN'
                        });
                }
        });
};

exports.getErr = function (req, res) {
        var condition = {questat: {$in: [ '任务未接受', '任务未完成', '任务已接受'] }};
        var fields = null;
        var options = [["_id", 1]];
        queryMethod.show(condition, fields, options, function (err, doc) {
                if(!err){
                        res.send(doc);
                }else {
                        res.send({
                                code: 201,
                                msg:'err'
                        });
                }
        });
};
exports.getNew = function (req, res) {
        var condition  = {};
        var date = moment().format('L');
        condition['quedate'] = new RegExp(date);
        var fields = null;
        var options = [["_id", 1]];
        queryMethod.show(condition, fields, options, function (err, doc) {
                if(!err){
                        res.send(doc);
                }else {
                        res.send({
                                code: 201,
                                msg: err
                        });
                }
        })
};

exports.getQn = function (req, res) {
        var data = req.body;
        queryMethod.findOne(data, function (err, doc) {
                if(!err){
                        res.send(doc);
                }else {
                        res.send({
                                code: 201,
                                msg: err
                        });
                }
        });
};

exports.saveQuery = function (req, res) {
        var data = {
                quename: req.body.quename,
                quedate: req.body.quedate,
                quemain: req.body.quemain,
                queloc: req.body.queloc,
                queman: req.body.queman,
                queinfo: req.body.queinfo,
                queplus: req.body.queplus,
                questat: '任务未接受'
        };
        queryMethod.save(data, function (err) {
                if(!err){
                        res.send({code:200, msg:'增加成功!'});
                }else{
                        res.send({code:201, msg:'增加失败!'});
                }
        });
};

exports.updateQuery = function (req, res) {
        var id = {_id: req.body.quepid};
        var data = {
                quename: req.body.quename
        };
        queryMethod.update(id, data, function (err) {
                if(!err){
                        res.send({code:200, msg:'修改成功!'});
                }else{
                        res.send({code:201, msg:'修改失败!'});
                }
        });
};

exports.removeQuery = function (req, res) {
        var id = {_id: {$in: req.body.quepid}};
        queryMethod.remove(id, function (err) {
                if(!err){
                        res.send({code:200, msg:'删除成功!'});
                }else{
                        res.send({code:201, msg:'删除失败!'});
                }
        });
};