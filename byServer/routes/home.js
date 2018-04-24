var express = require("express");
var Router = express.Router();
var mongoose = require("mongoose");
var Home = require("../models/home");

//连接方法一
// 连接数据库  ://账号:密码@主机地址:端口号/数据库名
mongoose.connect("mongodb://root:123456@47.52.195.96:27017/by_data");

/* // 连接方法二
var options = {
  // db: { native_parser: true },
  // server: { poolSize: 5 },
  // replset: { rs_name: "myReplicaSetName" },
  user: "root",
  pass: "123456"
};
mongoose.connect("mongodb://47.52.195.96:27017/by_data", options); */

mongoose.connection.on("connected", function () {
  console.log("mongodb  连接   成功");
});
mongoose.connection.on("error", function () {
  console.log("mongodb  连接 失败");
});
mongoose.connection.on("disconnected", function () {
  console.log("mongodb  连接 断开");
});

Router.get("/", function (req, res, next) {
  Home.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      res.json({
        status: "0",
        msg: "请求成功",
        result: {
          count: doc.length,
          data: doc[0]
        }
      });
      console.log(doc);
    }
  });
});

Router.get("/banners", function (req, res, next) {
  var reqTitle = req.param("reqTitle");
  var params = {
    banners: 1
  };
  // res.send(params);
  Home.find({}, params, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      res.json({
        status: "0",
        msg: "请求成功",
        result: {
          count: doc.length,
          data: doc[0]
        }
      });
      console.log(doc);
    }
  });
});
Router.get("/modules", function (req, res, next) {
  var type = req.param("type");
  var params = {};
  if (type) {
    params = [{
        $project: {
          modules: "$modules"
        }
      },
      {
        $unwind: "$modules"
      },
      {
        $match: {
          "modules.moduleType": type
        }
      }
    ];
  } else {
    params = {
      modules: 1
    };
  }
  Home.aggregate(params, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      res.json({
        status: "0",
        msg: "请求成功",
        result: {
          count: doc.length,
          data: doc
        }
      });
      // console.log(doc);
    }
  });
});

module.exports = Router;
