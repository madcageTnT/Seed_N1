/**
 * Created by MadCage on 2017/4/5.
 */
var mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/nodedb");

exports.mongoose = mongoose;