require("dotenv").config();
const express = require("express");
const productRoutes = require("./routes/productRoutes");
const connectDB = require("./config/db");
const path = require('path');

connectDB();

const app = express();

app.use(express.json());

// app.use("/", productRoutes);

app.use(express.static(path.join(__dirname, 'frontend/build')));


app.get('/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend/build', 'index.html'));
});



if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "frontend/build")));
  app.get("/", (request, response) => {
    response.sendFile(path.join(__dirname, "frontend/build", "index.html"));
  });
}
// app.use("/", productRoutes);
// app.use("/api/products", productRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
