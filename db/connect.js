require("dotenv").config();
const mongoose = require("mongoose");

const uri = "mongodb+srv://pamit7407084:Amit8948@restapi.ble0x58.mongodb.net/pamit7407084?retryWrites=true&w=majority";

const connectDB = () => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

mongoose.set("strictQuery", true);

module.exports = connectDB;
