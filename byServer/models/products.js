var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var ProductsShema = new Schema({

});

module.exports = mongoose.model("Products", ProductsShema, "Products");
