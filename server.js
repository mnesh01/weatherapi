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
  const apiKey = "b6a1155905ea0d4196d0e2dd9b542d3a";

   // Add your logic here to fetch weather data from the API
   const APIurl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=${apiKey}`;

   let weather;
   let error = null;
   try {
    const response = await  axios.get(APIurl)
    weather = response.data;
   } catch (error) {
    weather = null;
    error = "Error please try again";
    
   }




});




const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`App is running on port ${port}`);
});