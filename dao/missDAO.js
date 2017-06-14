/**
 * Created by MadCage on 2017/4/20.
 */
var missModel = require('../models/mission').missMed;

var missDAO = function () {};

missDAO.prototype = {
        save: function (json, callback) {
                var newMiss = new missModel(json);
                newMiss.save(function (err) {
                        callback(err);
                });
        },
        remove: function (json, callback) {
                missModel.remove(json, function (err) {
                        callback(err);
                });
        },
        changeStat: function (condition, json, callback) {
                missModel.update(condition, json, function (err) {
                        callback(err);
                });
        },
        findAll: function (condition, fields, options, callback) {
                missModel.find(condition, fields, options, function (err, doc) {
                        callback(err, doc);
                });
        }
};

exports.missMethod = new missDAO();