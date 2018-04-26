var express = require("express");
var Router = express.Router();
var mongoose = require("mongoose");
var areas = require("../models/areas");

Router.get("/", function (req, res, next) {
  areas.find({}, function (err, doc) {
    if (err) {
      res.json({
        status: "1",
        msg: err.message
      });
    } else {
      // res.send(doc);
      res.json({
        status: "0",
        msg: "请求成功",
        result: {
          count: doc.length,
          data: doc[0]
        }
      });
    }
  });
});

module.exports = Router;
