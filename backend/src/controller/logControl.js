const logModel = require('../model/logModel');

const saveLogData = async (req, res) => {
    try {
        const data = req.body;

        const logEntry = new logModel({
            message: data.message,
            level: data.level,
            source: data.source
        });

        const resultLog = await logEntry.save();
         const io = req.app.get("io");
        io.emit("new-log", resultLog);
        return res.send(resultLog);
    } catch (error) {
        return res.status(400).json({ "message": "data is not valid" });
    }
}

const getAllLogs = async (req, res) => {
    try {
        const logs = await logModel.find().sort({ timestamp: -1 });
        res.json(logs);
    } catch (error) {
        return res.status(500).json({ "message": "Error retrieving logs" });
    }
}

module.exports = { saveLogData, getAllLogs };       