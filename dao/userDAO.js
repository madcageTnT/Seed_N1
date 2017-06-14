/**
 * Created by MadCage on 2017/4/5.
 */
var regModel = require('../models/login').regMed;

var userDAO = function () {};

userDAO.prototype = {
        save: function (json, callback) {
                var newUser = new regModel(json);

                newUser.save(function (err) {
                        callback(err);
                });
        },
        remove: function (json, callback) {
                regModel.remove(json, function (err) {
                        callback(err);
                });
        },
        update: function (json, condition, callback) {
                regModel.update(json, condition, function (err) {
                        callback(err);
                });
        },
        select: function (name ,callback) {
                regModel.findOne({username: name}, function (err, doc) {
                        console.log(name);
                        callback(err, doc);
                })
        }
};



exports.userMethod = new userDAO();