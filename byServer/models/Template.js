var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var TemplateShema = new Schema({

});

module.exports = mongoose.model("Template", TemplateShema, "Templates");
