/**
 * Created by MadCage on 2017/4/24.
 */
var mongodb = require('./index');

var Schema = mongodb.mongoose.Schema;

var workSchema = new Schema({
        workname: {type:String},
        workphone: {type: String},
        workup: {type: String},
        workdown: {type: String},
        workstat: {type: String},
        workdate: {type: String},
        upstat: {type: String},
        downstat: {type: String},
        show: {
                type: Boolean,
                default: false
        }
},{
        versionKey: false
});

var workMethod = mongodb.mongoose.model('workcheck', workSchema);

exports.workMed = workMethod;