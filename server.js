const express = require("express");
const axios = require("axios");
const app = express();

app.set("view engine", "ejs");

app.use(express.static("public"));

app.get("/", (req, res) => {
  res.render("index", { weather: null, error: null });
});

app.get("/weather", async (req, res) => {

  const city = req.query.city;
  const apiKey = "";

});




const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});