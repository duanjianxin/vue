var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var homeShema = new Schema({
  banners: { type: Array },
  poster: { type: String },
  article: { type: Object },
  platformAssurance: { type: Array },
  operationNavigation: { type: Array },
  pageSize: { type: String },
  pageCount: { type: String },
  pageIndex: { type: String },
  modules: { type: Array },
  oneLevelCategoryList: { type: Array },
  apkURL: { type: String }
});

module.exports = mongoose.model("Home", homeShema, "homes");
