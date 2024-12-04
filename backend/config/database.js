const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;

const connectDatabase = () => {
  // Set strictQuery option to avoid the deprecation warning
  mongoose.set("strictQuery", false); // Set to true if you prefer to keep strict query behavior

  mongoose
    .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
      console.log("Mongoose Connected");
    })
    .catch((err) => {
      console.error("Mongoose Connection Error:", err);
    });
};

module.exports = connectDatabase;
