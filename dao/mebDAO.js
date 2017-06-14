/**
 * Created by MadCage on 2017/4/5.
 */
var mebModel = require('../models/member').mebMed;

var mebDAO = function (){};

mebDAO.prototype = {
        save: function (json, callback) {
                var newMeb = new mebModel(json);

                newMeb.save(function (err) {
                        callback(err);
                });
        },
        remove: function (json, callback) {
                mebModel.remove(json, function (err) {
                        callback(err);
                });
        },
        update: function (condition, json, callback) {
                mebModel.update(condition, json, function (err) {
                        callback(err);
                });
        },
        select: function (callback) {
                mebModel.find(function (err, doc) {
                        console.log(doc);
                        callback(err, doc);
                });
        },
        findOne: function (condition, callback) {
                mebModel.findOne(condition, function (err, doc) {
                        console.log(doc);
                        callback(err, doc);
                })
        },
        numGET: function (condition, callback) {
                mebModel.count(condition, function (err, doc) {
                        callback(err, doc);
                })
        }
};


exports.mebMethod = new mebDAO();
