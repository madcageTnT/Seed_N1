/**
 * Created by MadCage on 2017/4/5.
 */
var listMethod = require('../dao/mebDAO').mebMethod;
// var fs = require('fs');

exports.showList = function (req, res) {
        listMethod.select(function (err, doc) {
                if(!err){
                        // var str_json = JSON.stringify(doc);
                        // fs.writeFile('../public/json/meb.json', str_json, 'utf-8',function () {
                        //         console.log('fin!');
                        // });
                        res.send(doc);

                }else {
                        res.send({
                                code: 201,
                                msg: '查询错误!'
                        });
                        console.log(err);
                }
        })
};

exports.updateList = function (req, res) {
        var id = {_id:req.body.mebpid};
        var data = {$set: {
                mebname: req.body.mebname,
                mebconf: req.body.mebconf,
                mebphone: req.body.mebphone,
                mebloc: req.body.mebloc,
                mebtime: req.body.mebtime
        }};
        console.log(data);
        listMethod.update(id, data,function (err, tank) {
                if(!err){
                        res.send({code:200, msg:'修改成功!'});
                }else{
                        res.send({code:201, msg:'修改失败!'});
                }
        });
};

exports.insertList = function (req, res) {
        var data = {
                mebname: req.body.mebname,
                mebconf: req.body.mebconf,
                mebphone: req.body.mebphone,
                mebloc: req.body.mebloc,
                mebtime: req.body.mebtime
        };
        console.log(data);
        listMethod.save(data, function (err, doc) {
                if(!err){
                     res.send({code:200, msg:'增加成功!'});
                }else{
                        res.send({code:201, msg:'增加失败!'});
                }

        });
};

exports.removeList = function (req, res) {
        var data ={_id: {$in: req.body.mebpid}};
        console.log(data);
        listMethod.remove(data, function (err, doc) {
                if(!err){
                        res.send({code:200, msg:'删除成功!'});
                }else{
                        res.send({code:201, msg:'删除失败!'});
                }
        });
};

exports.findOneList = function (req, res) {
        var data = req.body;
        console.log(data);
        listMethod.findOne(data, function (err, doc) {
                if(!err){
                        res.send(doc);
                }else {
                        res.send({
                                code: 201,
                                msg: 'error'
                        });
                        console.log(err);
                }
        });
};

exports.countList = function (req, res) {
        var data = req.body;
        listMethod.numGET(data, function (err, doc) {
                if(!err){
                        var val = doc.toString();
                        res.send(val);
                }else {
                        res.send({
                                code: 201,
                                msg: 'GET Error!'
                        });
                        console.log(err);
                }
        })
};
