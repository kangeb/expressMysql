var express = require('express');
var router = express.Router();
var db = require("../config/db");

/* GET users listing. */
router.get('/test', function(req, res, next) {
  //res.send('respond with a resource');
  var json=[{str:"str"},{str:"str"},{str:"str"},{str:"str"},{str:"str"},{str:"str"},{str:"str"},{str:"str"},{str:"str"},{str:"str"},{str:"str"},{str:"str"}];
  res.send(json);

});
router.get('/hello', function(req, res, next) {
  res.render('luck', { title: 'hello luck' });
});
/**
 * 查询列表页
 */
router.get("/queryAll",function(req,res,next){
    db.query("select * from jsall",function(err,rows){
        res.send(JSON.stringify(rows));
    });
});

router.get("/queryParme",function(req,res,next){
    db.query("select * from jsall",function(err,rows){
        res.send(req.query.username);
    });
});
/**
 * 登录
 */
router.get("/login",function(req,res,next){
    var username = req.query.username;
    var password = req.query.password;
    var sql = "select * from jsall where username = '"+ username +"'and password = '" + password + "'";
    db.query(sql,function(err,rows){
        if(err){
            res.send("查询失败: "+err);
        }else{
            res.send({"user":{data:JSON.stringify(rows)}});
        }
    });
}) 

module.exports = router;
