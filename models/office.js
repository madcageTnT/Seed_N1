/**
 * Created by MadCage on 2017/4/13.
 */
var mongodb = require('./index');

var Schema = mongodb.mongoose.Schema;

var offSchema = new Schema({
        offname: {type: String},
        offnum: {type: String},
        offmain: {type: String},
        offtime: {type: String}

},{versionKey: false});

var offModel = mongodb.mongoose.model('office',offSchema);

exports.offMed = offModel;