/**
 * Created by MadCage on 2017/4/26.
 */
var mongodb = require('./index');

var Schema = mongodb.mongoose.Schema;

var queSchema = new Schema({
        quename: {type: String},
        quedate: {type: String},
        quemain: {type: String},
        queloc: {type: String},
        queman: {type: String},
        queinfo: {type: String},
        queplus: {type: String},
        questat: {type: String}
},{versionKey: false});

var queModel = mongodb.mongoose.model('query', queSchema);

exports.queMed = queModel;