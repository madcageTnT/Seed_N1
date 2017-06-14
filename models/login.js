/**
 * Created by MadCage on 2017/4/5.
 */
var mongodb = require('./index');

var Schema = mongodb.mongoose.Schema;

var regSchema = new Schema({
                    username :{type: String},
                    password :{type: String},
                    createTime :{
                        type: Date,
                        default: Date.now
        }
},{
        versionKey: false,
        timeStamps: {
                createdAt: 'createTime'
        }
    }
);

var regModel = mongodb.mongoose.model('user', regSchema);

exports.regMed = regModel;