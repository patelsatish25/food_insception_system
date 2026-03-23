const { getRounds } = require("bcrypt");
const kafka = require("../config/kafka");
const producer = kafka.producer();

const run = async () => {
  await producer.connect();

  try {
    await producer.send({
      topic: "logs",
      messages: [
        { 
             value: JSON.stringify({
        timestamp: new Date(),
        message: "Session ended",
        level: "errpr",
        source: "sessionend",
      })},
      ],
    });

    console.log("✅ Messages sent successfully");
  } catch (error) {
    console.error("❌ Error:", error.message);
  } finally {
    await producer.disconnect();
  }
};
setInterval(()=>{run();}, 5000); // Run every 5 seconds

