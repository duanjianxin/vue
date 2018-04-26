var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var productListShema = new Schema({
  productList: {
    type: Array
  }
});

module.exports = mongoose.model("productList", productListShema, "productLists");
