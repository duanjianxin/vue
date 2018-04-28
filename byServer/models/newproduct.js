var mongoose = require("mongoose");
var Int32 = require('mongoose-int32');
var Schema = mongoose.Schema;
var newproductShema = new Schema({
  productList: {
    type: Array
  },
  pageCount: {
    type: Int32
  },
  pageIndex: {
    type: Int32
  },
  pageSize: {
    type: Int32
  },
  shareInfo: {
    type: Object
  },
  listTitle: {
    type: String
  }
});

module.exports = mongoose.model("NewproductList", newproductShema, "NewproductLists");
