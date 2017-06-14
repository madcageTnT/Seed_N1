/**
 * Created by MadCage on 2017/4/24.
 */
var workModel = require('../models/workcheck').workMed;

var workDAO = function () {};

workDAO.prototype = {
        check: function (callback) {
                workModel.find(function (err, doc) {
                        console.log(err);
                        callback(err, doc);
                });
        },
        remove: function (condition, callback) {
                workModel.remove(condition, function (err) {
                        callback(err);
                });
        },
        drop: function (callback) {
                workModel.drop(function (err) {
                        callback(err);
                });
        },
        save: function (json, callback) {
                var newWork = new workModel(json);
                newWork.save(function (err) {
                        callback(err);
                });
        },
        update: function (condition, json, callback) {
                workModel.update(condition, json, function (err) {
                        callback(err);
                });
        }

};

exports.workMethod = new workDAO();