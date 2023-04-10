const express = require("express");
const app = express();
const PORT = process.env.PORT || 5000;
const product_route = require("./routes/product");
const connectDB = require("./db/connect");



app.use("/api/products", product_route);

app.get("/", (req, res) => {
  res.send("I am Live Now !!! ");
});



const start = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Listening at Port  ${PORT} `);
    });
  } catch (error) {
    console.log("500 Internal Server Error");
  }
};

start();
