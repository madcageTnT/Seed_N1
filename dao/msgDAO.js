/**
 * Created by MadCage on 2017/5/7.
 */
var msgModel  = require('../models/message').msgMed;

var msgDAO = function () {};

msgDAO.prototype = {
        save: function (json , callback) {
                var newMsg = new msgModel(json);
                newMsg.save(function (err) {
                        callback(err);
                });
        }
};

exports.msgMethod = new msgDAO();
