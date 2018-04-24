var express = require("express");
var Router = express.Router();
var mongoose = require("mongoose");
var categorys = require("../models/categorys");

Router.get("/", function (req, res, next) {
  categorys.find({}, function (err, doc) {
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
    }
  });
});

module.exports = Router;
