var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TemplateShema = new Schema({
  categoryId: {
    type: Number
  }
});

module.exports = mongoose.model("Template", TemplateShema, "Templates");
