/**
 * Created by MadCage on 2017/5/8.
 */
var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
        service: '163',
        auth: {
                user: 'madcage1994@163.com',
                pass: 'Zhaozhe1994'
        }
});

// var 123 = function (html) {
//         var option = {
//                 from:"madcage1994@163.com",
//                 to:"1027855186@qq.com"
//         };
//         option.subject = 'MCG-Master账号申请';
//         option.html= html;
//         transporter.sendMail(option, function(error, response){
//                 if(error){
//                         console.log("fail: " + error);
//                 }else{
//                         console.log("success: " + response.message);
//                 }
//         });
// };

exports.regEmail = function (req, res) {
        var option = {
                from:"madcage1994@163.com",
                to:"1027855186@qq.com"
        };
        option.subject = 'MCG-Master账号申请';
        option.html= req.body.html;
        transporter.sendMail(option, function(error, response){
                if(error){
                        console.log("fail: " + error);
                        res.send({
                               code: 201,
                                msg: '请求失败：'+ error
                        })
                }else{
                        console.log("success: " + response.message);
                        res.send({
                                code: 200,
                                msg: '申请中...请注意查看邮箱信息'
                        })
                }
        });

};