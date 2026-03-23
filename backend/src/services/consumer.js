const { Kafka } = require("kafkajs");

// Kafka config
const kafka = new Kafka({
  clientId: "consumer-app",
  brokers: ["localhost:9092"],
});

const consumer = kafka.consumer({ groupId: "test-group" });

const runConsumer = async () => {
  await consumer.connect();
  console.log("✅ Consumer Connected");

  await consumer.subscribe({
    topic: "logs",
    fromBeginning: true,
  });

  await consumer.run({
    eachMessage: async ({ topic, partition, message }) => {
      console.log("📥 Received:", message.value.toString());
    },
  });
};

runConsumer().catch((error) => {
  console.error("❌ Consumer error:", error);
});