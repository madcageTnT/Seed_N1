/**
 * Created by MadCage on 2017/4/5.
 */
var regMethod = require('../dao/userDAO').userMethod;

exports.regUser = function (req, res) {
        console.log(req.body);
        regMethod.select(req.body.username, function (err, doc) {
                if(!err){
                        if(!doc){
                                var newUser = {username: req.body.username, password: req.body.password};
                                regMethod.save(newUser, function (err) {
                                        if(!err){
                                                res.send({
                                                        code: 200,
                                                        msg: "注册成功！"
                                                });
                                        }
                                });
                        }else {
                                res.send({
                                        code: 201,
                                        msg: "用户名已被使用"
                                })
                        }

                }
        });
};