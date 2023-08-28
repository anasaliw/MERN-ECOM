const express = require("express");
const app = express();
const cors = require("cors");
const dotenv = require("dotenv");
const ProductRoutes = require("./routes/productRoutes.js");
const DBConnection = require("./config/db.js");

app.use(cors());
dotenv.config({ path: "config/config.env" });
app.use("/api/v1", ProductRoutes);
DBConnection();
app.listen(process.env.PORT | 8000, () => {
  console.log(process.env.PORT, " Listening at port 8000");
});
