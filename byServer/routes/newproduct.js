var express = require("express");
var Router = express.Router();
var mongoose = require("mongoose");
var Newproduct = require("../models/newproduct");

Router.get("/", function(req, res, next) {
  Newproduct.find({}, function(err, doc) {
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
          count: doc[0].productList.length,
          data: doc[0]
        }
      });
    }
  });
});

module.exports = Router;
