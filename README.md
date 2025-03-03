# Weather App

A simple Weather App built using Node.js, Express, and the OpenWeather API. The app allows users to enter a city name and fetch real-time weather data, displaying the temperature, weather condition, and location.

## Features
- Fetches real-time weather data from OpenWeather API
- Uses EJS for templating
- Utilizes Axios for HTTP requests
- Displays temperature, weather condition, and city details
- Handles errors gracefully

## Technologies Used
- Node.js
- Express.js
- EJS (Embedded JavaScript Templates)
- Axios
- OpenWeather API

## Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/weatherapp.git
   cd weatherapp
   ```

2. Install dependencies:
   ```sh
   npm install
   ```

3. Create a `.env` file and add your OpenWeather API key:
   ```
   API_KEY=your_openweather_api_key
   ```

4. Start the server:
   ```sh
   node server.js
   ```

5. Open the browser and go to:
   ```
   http://localhost:3001
   ```

## Usage
1. Enter the name of a city in the input field.
2. Click the "Get Weather" button.
3. The app will fetch and display the temperature, weather condition, and location.
4. If the city is not found or there is an error, an error message will be displayed.

## File Structure
```
weatherapp/
│-- node_modules/
│-- public/
│   ├── styles.css
│-- views/
│   ├── index.ejs
│-- .gitignore
│-- package.json
│-- server.js
```

## API Reference
This app uses the [OpenWeather API](https://openweathermap.org/api) to fetch weather data. You need an API key to use the service.

Example API request:
```
https://api.openweathermap.org/data/2.5/weather?q=London&units=imperial&appid=your_api_key
```


## Author
[Your Name](https://github.com/mnesh01)

