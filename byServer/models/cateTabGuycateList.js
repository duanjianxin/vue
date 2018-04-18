var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TabShema = new Schema({});

module.exports = mongoose.model("cateTabGuycateList", TabShema, "cateTabGuycateLists");
