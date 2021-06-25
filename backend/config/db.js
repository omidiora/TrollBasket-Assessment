require("dotenv").config();
const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://omidiora:oluwa123@cluster0-shard-00-00.ustki.mongodb.net:27017,cluster0-shard-00-01.ustki.mongodb.net:27017,cluster0-shard-00-02.ustki.mongodb.net:27017/myFirstDatabase?ssl=true&replicaSet=atlas-7u1fx3-shard-0&authSource=admin&retryWrites=true&w=majority", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB connection SUCCESS");
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
