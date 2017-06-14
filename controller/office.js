/**
 * Created by MadCage on 2017/4/13.
 */
var officeMethod = require('../dao/offDAO').offMethod;

exports.showOffice = function (req, res) {
        officeMethod.select(function (err, doc) {
                if(!err){
                        res.send(doc);
                }else{
                        res.send({
                                code: 201,
                                msg: '查询成功!'
                        });
                        console.log(err);
                }
        })
};

exports.updateOffice = function (req, res) {
        var id = {
                "_id": req.body._id
        };
        var data = {
                "offname" :req.body.offname,
                "offnum": req.body.offnum,
                "offmain": req.body.offmain,
                "offtime": req.body.offtime
        };
        officeMethod.update(id, data, function (err) {
                if(!err){
                        res.send({
                                code: 200,
                                msg: "FIN"
                        });
                }else {
                        res.send({
                                code:201,
                                msg: "Error"
                        })
                }
        });
};

exports.removeOffice = function (req,res) {

};

exports.insertOffice = function (req, res) {
        var data = {
                "offname": req.body.offname,
                "offnum": req.body.offnum,
                "offmain": req.body.offmain,
                "offtime": req.body.offtime
        };
        officeMethod.save(data, function (err) {
                if(!err){
                        res.send({
                                code: 200,
                                msg:"FIN!"
                        });
                }else {
                        res.send({
                                code: 201,
                                msg: "Error"
                        });
                }
        });
};