require("dotenv").config();
const express = require("express");
const connectDatabase = require("./config/db");
const apiRoutes = require("./routes/api");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use("/api", apiRoutes);

connectDatabase().then(() => {
  app.listen(PORT, () => {
    console.log(`Server jalan di port ${PORT}`);
  });
});