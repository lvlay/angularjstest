var express = require('express');
var path  = require('path');
var bodyParser = require('body-parser');


// usage:
//     weibo?act=add&content=xxx	添加一条
// 返回：{error:0, id: 新添加内容的ID, time: 添加时间}
//
// weibo?act=get_page_count	获取页数
// 返回：{count:页数}
//
// weibo?act=get&page=1		获取一页数据
// 返回：[{id: ID, content: "内容", time: 时间戳, acc: 顶次数, ref: 踩次数}, {...}, ...]
//
// weibo?act=acc&id=12			顶某一条数据
// 返回：{error:0}
//
// weibo?act=ref&id=12			踩某一条数据
// 返回：{error:0}
//

app = express();

console.log(path.join(path.resolve(__dirname, '..'), 'public'));
app.use(express.static(path.join(path.resolve(__dirname, '..'), 'public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));


app.get('/',function (res,resp,next) {

    resp.send('首页');
})

//  http://127.0.0.1:3000/test?a=15&b=3
app.get('/test',function (req,resp,next) {
    var a = parseInt(req.query.a);
    var b = parseInt(req.query.b);
    var result=a+b;
    resp.send(result+'');
})





app.listen(3000);
