/**
 * Created by MadCage on 2017/4/5.
 */
var logMethod = require('../dao/userDAO').userMethod;

exports.login = function (req, res) {
        logMethod.select(req.body.username, function (err, doc) {
                if(!err && doc && req.body.password === doc.password){
                        var user = {
                                username: req.body.username,
                                password: req.body.password
                        };
                        req.session.user = user;
                        res.send({
                                code: 200,
                                msg: '登录成功'
                        });
                }else {
                        res.send({
                                code: 201,
                                msg: '用户名或密码错误'
                        });
                }

        })
};