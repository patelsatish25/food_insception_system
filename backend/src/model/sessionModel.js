const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({
  
  session: {
    date: String,
    start_time: String,
    end_time: String,
    total_time_seconds: Number,
    status: String
  },

  food_inspection: {
    "category":String,
    "name": String,
    "total_count": Number,
    "good_count": Number,
    "bad_count": Number,
    "avg_confidence_good": Number,
    "avg_confidence_bad": Number,
    "detected_at":String
  }
});
const sessionSchemaModel= mongoose.model("Session", sessionSchema);
module.exports =sessionSchemaModel