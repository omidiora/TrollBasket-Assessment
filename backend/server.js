require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");

connectDB();

const app = express();

app.use(express.json());

// app.get("/", (req, res) => {
//   res.json({ message: "API running..." });
// });
if(process.env.NODE_ENV=='production'){
  app.use(express.static('frontent/build'))
}

app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
