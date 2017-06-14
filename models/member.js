/**
 * Created by MadCage on 2017/4/5.
 */
var mongodb = require('./index');

var Schema = mongodb.mongoose.Schema;

var mebSchema = new Schema({
        mebname: {type: String},
        mebconf: {type: String},
        mebphone: {type: String},
        mebemail: {type: String},
        mebloc: {type:String},
        mebtime: {type:String}

},{versionKey: false});

var mebModel = mongodb.mongoose.model('member',mebSchema);

exports.mebMed = mebModel;