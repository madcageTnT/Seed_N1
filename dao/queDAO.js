/**
 * Created by MadCage on 2017/4/26.
 */
var queModel = require('../models/query').queMed;

var queDAO = function () {};

queDAO.prototype = {
        save: function (json, callback) {
                var newQue = new queModel(json);
                newQue.save(function (err) {
                        callback(err);
                });
        },
        remove: function (json, callback) {
                queModel.remove(json, function (err) {
                        callback(err);
                });
        },
        update: function (condition, json, callback) {
                queModel.update(condition, json, function (err) {
                        callback(err);
                });
        },
        show: function (condition, fields, options, callback) {
                queModel.find(condition, fields, options, function (err, doc) {
                        callback(err, doc);
                })
        },
        findOne: function (json,callback) {
                queModel.findOne(json, function (err, doc) {
                        callback(err, doc);
                })
        }
};

exports.queMethod = new  queDAO();