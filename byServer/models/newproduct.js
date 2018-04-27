var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var newproductShema = new Schema({
  productList: {
    type: Array
  },
  pageCount: {
    type: Number
  },
  pageIndex: {
    type: Number
  },
  pageSize: {
    type: Number
  },
  shareInfo: {
    type: Object
  },
  listTitle: {
    type: String
  }
});

module.exports = mongoose.model("NewproductList", newproductShema, "NewproductLists");
