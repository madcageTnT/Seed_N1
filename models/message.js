/**
 * Created by MadCage on 2017/5/7.
 */
var mongodb = require('./index');

var Schema = mongodb.mongoose.Schema;

var msgSchema = new Schema({
        msgtitle: {type: String},
        msghtml: {type: String},
        createTime: {
                type: Date,
                default: Date.now()
        }
},{
        versionKey: false,
        timeStamps: {
                createdAt: 'createTime'
        }
});

var msgmodel = mongodb.mongoose.model('message',msgSchema);

exports.msgMed = msgmodel;