const kafka = require("../config/kafka");
const readline = require("readline");

const admin = kafka.admin();
// Readline setup
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const run = async () => {
  await admin.connect();
  console.log("✅ Kafka Admin Connected");

  rl.question("Enter topic name: ", async (topicName) => {
    try {
      await admin.createTopics({
        topics: [
          {
            topic: topicName,
            numPartitions: 1,
            replicationFactor: 1,
          },
        ],
      });

      console.log(`🎉 Topic '${topicName}' created successfully`);
    } catch (err) {
      console.error("❌ Error:", err.message);
    } finally {
      await admin.disconnect();
      rl.close();
    }
  });
}
run();