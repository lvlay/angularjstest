/**
 * Created by maggie on 16/11/17.
 */
var mongoose = require('mongoose');
var dbconfig = require('./dbconfig.js');

var ObjectId = mongoose.Schema.Types.ObjectId;

mongoose.connect(dbconfig.dburl);
//创建数据库模型
var weiboSchema = new mongoose.Schema({
    content: String,
    rcc: {type:Number,default:0},
    ref: {type: Number, default: 0},
    createTime:{type:Date,default:Date.now}
});



exports.Weibo = mongoose.model('weibo', weiboSchema);

