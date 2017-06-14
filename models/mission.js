/**
 * Created by MadCage on 2017/4/20.
 */
var mongodb = require('./index');

var Schema = mongodb.mongoose.Schema;

var missSchema = new Schema({
        misstime: {type: String},
        misslang: {type: String},
        missinfo: {type: String},
        missmann: {type: String},
        missloc: {type: String},
        misssta: {type: String},
        createTime: {
                type: Date,
                default: Date.now
        }
},{
        versionKey: false,
        timeStamps: {
                createdAt: 'createTime'
        }
});

var missModel = mongodb.mongoose.model('mission', missSchema);

exports.missMed = missModel;