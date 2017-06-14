/**
 * Created by MadCage on 2017/4/13.
 */
var offModel = require('../models/office').offMed;

var offDAO = function () {};

offDAO.prototype = {
        save: function (json, callback) {
                var newOff = new offModel(json);
                newOff.save(function (err) {
                        callback(err);
                });
        },
        remove: function (json, callback) {
                offModel.remove(json, function (err) {
                        callback(err);
                });
        },
        update: function (condition, json, callback) {
                offModel.update(condition, json, function (err) {
                        callback(err);
                });
        },
        select: function (callback) {
                offModel.find(function (err, doc) {
                        console.log(doc);
                        callback(err, doc);
                });
        }
};

exports.offMethod = new offDAO();