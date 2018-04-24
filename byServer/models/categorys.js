var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var categorysShema = new Schema({
  categoryId: {
    type: Number
  },
  categoryName: {
    type: String
  },
  categoryType: {
    type: Number
  },
  subCategoryList: {
    type: Array
  },
  categoryImage: {
    type: Object
  }

});

module.exports = mongoose.model("categorys", categorysShema, "categorys");
