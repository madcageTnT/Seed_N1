var express = require('express');
var router = express.Router();

//controller引入
var indexCtrl = require('../controller/index');
var regCtrl = require('../controller/regUser');
var logCtrl = require('../controller/login');
var mebCtrl = require('../controller/member');
var offCtrl = require('../controller/office');
var workCtrl = require('../controller/workcheck');
var qnfile = require('../filesystem/qiniu');
var locup = require('../filesystem/multerCtrl');
var queCtrl = require('../controller/query');
var missCtrl = require('../controller/mission');
var msgCtrl = require('../controller/message');
var mail = require('../extras/nodemailer');
// var session = require('../midware/session');
//
// router.use(session.session());
/* GET home page. */
router.get('/', function(req, res, next) {
        res.render('index', indexCtrl.index());
});
/*LOGIN入口*/
router.get('/login', function (req, res, next) {
        res.render('reg',{title: '注册登录'});
    }
);
/*MAIN入口*/
router.get('/main', function (req, res) {
        if(req.session.user){
                res.render('main', {
                        title: 'MainPage',
                        username: req.session.user["username"]

                });
        }else {
                req.session.error = '请先登录';
                res.redirect('/');
        }
});
/*登出入口*/
router.get('/logout', function (req, res) {
        req.session.user = null;
        req.session.error = null;
        res.redirect('/');
});
router.get('/out', function(req, res) {
        res.render('out');
});
router.get('/out1',function (req, res) {
        res.render('out1');
});
router.get('/miss', function (req, res) {
        res.render('miss');
});
router.get('/miss1', function (req, res) {
        res.render('miss1');
});
router.get('/push', function (req, res) {
        res.render('push');
});
router.get('/push1', function (req, res) {
        res.render('push1');
});
/*TEST*/
router.get('/test',function (req, res) {
        res.render('test',{
                title: 'MCG系统登录'
        });
});

router.get('/test1', offCtrl.showOffice);


router.post('/meblist1', mebCtrl.showList);
router.post('/meblist1/insert', mebCtrl.insertList);
router.post('/meblist1/update', mebCtrl.updateList);
router.post('/meblist1/delete', mebCtrl.removeList);
router.post('/meblist1/findOne', mebCtrl.findOneList);
router.post('/meblist1/numGET', mebCtrl.countList);

router.post('/offlist', offCtrl.showOffice);
router.post('/offlist/update', offCtrl.updateOffice);
router.post('/offlist/insert', offCtrl.insertOffice);
router.post('/offlist/delete', offCtrl.removeOffice);

router.post('/misslist', missCtrl.showMiss);
router.post('/misslist/pass', missCtrl.chaMiss);
router.post('/misslist/delete', missCtrl.delMiss);

router.post('/checkwork', workCtrl.showCheck);
router.post('/checkwork/save', workCtrl.saveCheck);
router.post('/checkwork/remove', workCtrl.removeCheck);
router.post('/checkwork/listdrop', workCtrl.dropCheck);
router.post('/checkwork/update', workCtrl.updateCheck);

router.post('/FileUpload/LocUpload', locup.dataInput);
router.post('/FileUpload/qnUpload', qnfile.upfile);

router.post('/Area11', queCtrl.showQuery);
router.post('/Area11/save', queCtrl.saveQuery);
router.post('/Area11/update', queCtrl.updateQuery);
router.post('/Area11/remove', queCtrl.removeQuery);
router.post('/Area11/getErr', queCtrl.getErr);
router.post('/Area11/getNew', queCtrl.getNew);
router.post('/Area11/getQn', queCtrl.getQn);

router.post('/msg', msgCtrl.saveMsg);

router.post('/regAdmin', mail.regEmail);
/*REG请求*/
router.post('/reg',regCtrl.regUser);
/*登录请求*/
router.post('/userlogin',logCtrl.login);




module.exports = router;
