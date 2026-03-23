const mongoose = require("mongoose");
const logSchema = new mongoose.Schema({
    
timestamp: { type: Date, default: Date.now },
message: String,
level: String,
source: String
    
});

module.exports = mongoose.model("Log", logSchema);  
    