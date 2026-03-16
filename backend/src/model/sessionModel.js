const mongoose = require("mongoose");

const sessionSchema = new mongoose.Schema({

  session: {
    date: { type: Date, default: Date.now },
    start_time: String,
    end_time: String,
    total_time_seconds: Number,
    status: String
  },

  food_inspection: {
    category: String,
    name: String,
    total_count: Number,
    good_count: Number,
    bad_count: Number,
    avg_confidence_good: Number,
    avg_confidence_bad: Number,
    detected_at: String
  }

});

module.exports = mongoose.model("Session", sessionSchema);