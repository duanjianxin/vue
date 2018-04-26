var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var areasShema = new Schema({
  province_list: {
    type: Object
  },
  city_list: {
    type: Object
  },
  county_list: {
    type: Object
  }
});

module.exports = mongoose.model("areas", areasShema, "areas");
