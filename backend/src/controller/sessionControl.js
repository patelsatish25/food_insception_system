const sessionSchemaModel = require("../model/sessionModel")
const saveSessionData = async (req, res) => {
    try {

        const data = req.body;



        const session = new sessionSchemaModel({
            session: data.session,
            food_inspection: data.food_inspection

        })
        const resultSession = await session.save();
        const io = req.app.get("io");

        io.emit("new-session", resultSession);
        return res.send(resultSession)
    } catch (error) {
        return res.status(400).json({ "message": "data is not valid" })
    }

}


const getAllFoods = async (req, res) => {

    try {

        const foods = await sessionSchemaModel.aggregate([
            {
                $project: {

                    session: "$session._id" ,

                    food: "$food_inspection.name",

                    category: "$food_inspection.category",
                    starttime: "$session.start_time",
                    endtime: "$session.end_time",
                    date: "$session.date",
                    good: "$food_inspection.good_count",
                    
                    bad: "$food_inspection.bad_count",
                    status:"$session.status",
                    confidence: "$food_inspection.avg_confidence_good",

                  

                }
              
            },  { $sort: { date: -1 } }
        ]);

        res.json({
            foods
        });

    } catch (error) {

        res.status(500).json({
            error: error.message
        });

    }

};
const getAnalytics = async (req, res) => {

    try {

        /* SUMMARY CARDS */

        const summary = await sessionSchemaModel.aggregate([
            {
                $group: {
                    _id: null,
                    totalSessions: { $sum: 1 },
                    totalFood: { $sum: "$food_inspection.total_count" },
                    goodFood: { $sum: "$food_inspection.good_count" },
                    badFood: { $sum: "$food_inspection.bad_count" }
                }
            }
        ]);


        /* FOOD DISTRIBUTION */

        const foodDistribution = await sessionSchemaModel.aggregate([
            {
                $group: {
                    _id: "$food_inspection.name",
                    good: { $sum: "$food_inspection.good_count" },
                    bad: { $sum: "$food_inspection.bad_count" }
                }
            }
        ]);


        /* DETECTION TREND */

        const detectionTrend = await sessionSchemaModel.aggregate([
            {
                $group: {
                    _id: {
                        $dateToString: {
                            format: "%Y-%m-%d",
                            date: { $toDate: "$session.date" }
                        }
                    },
                    count: { $sum: "$food_inspection.total_count" }
                }
            },
            { $sort: { _id: 1 } }
        ]);

        res.json({
            summary: summary[0] || {},
            foodDistribution,
            detectionTrend
        });

    } catch (error) {

        res.status(500).json({ error: error.message });

    };
}
const getALLSessioData = async (req, res) => {
    try {
        sessions = await sessionSchemaModel.find({})
        return res.json({ data: sessions })

    } catch (error) {
        return res.json({ "message": error })
    }

}

const getSessionData = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id)
        resultSession = await sessionSchemaModel.findById(id);
        return res.send(resultSession);
    } catch (error) {
        console.log()
    }
}
module.exports = { saveSessionData, getALLSessioData, getSessionData, getAnalytics ,getAllFoods};