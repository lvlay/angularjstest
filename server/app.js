var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
var models = require('../db/model');


app = express();

console.log(path.join(path.resolve(__dirname, '..'), 'public'));
app.use(express.static(path.join(path.resolve(__dirname, '..'), 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


app.get('/', function (res, resp, next) {

    resp.send('首页');
})

//  http://127.0.0.1:3000/test?a=15&b=3
app.get('/test', function (req, resp, next) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var result = a + b;
    console.log(result);
    resp.send(result + '');
});
app.get('/weibo', function (req, resp, next) {

    var pageSize = 7;//每页7条记录
    var act = req.query.act;

    switch (act) {
//     weibo?act=add&content=xxx	添加一条
// 返回：{error:0, _id: 新添加内容的ID, createTime: 添加时间}
        case  'add':
            var content = req.query.content;
            models.Weibo.create({content: content}, function (err, doc) {
                console.log(doc);
                var result = {error: 0, _id: doc._id, createTime: doc.createTime.getTime()};
                resp.send(result);
            });

            break;
// weibo?act=get_page_count	获取页数
// 返回：{count:页数}
        case  'get_page_count':


            models.Weibo.count({}, function (err, count) {
                var pages = Math.ceil(count / pageSize);
                console.log("count=" + count + " pages=" + pages);
                resp.send({count: pages});
            });
            break;
// weibo?act=get&page=1		获取一页数据
// 返回：[{_id: ID, content: "内容", createTime: 时间戳, acc: 顶次数, ref: 踩次数}, {...}, ...]
        case  'get':
            var page = req.query.page;//获得第几页
            console.log("aaaaa");
            models.Weibo.find({})
                .sort({createTime: -1})
                .skip((page - 1) * pageSize)
                .limit(pageSize).exec(function (err, docs) {
                console.log(docs);
                var result=[];
                docs.forEach(function (weibo) {

                    var o={
                        _id:weibo._id,
                        content:weibo.content,
                        rcc:weibo.rcc,
                        ref:weibo.ref,
                        createTime:weibo.createTime.getTime()
                    }

                    result.push(o);
                })
                resp.send(result);
            })

            break;

//
// weibo?act=acc&id=12			顶某一条数据
// 返回：{error:0}
//
// weibo?act=ref&id=12			踩某一条数据
// 返回：{error:0}
//

        case  'rcc':
        case  'ref':
            var id= req.query.id;
            var q={};
            q[act]=1;
            models.Weibo.update({_id:id},{$inc:q},function () {
                resp.send({error:0});
            })
            break;
    }
})

app.listen(3000);
