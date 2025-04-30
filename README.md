# Weather Forecasting Web Application

This **Weather Forecasting Web Application** is a simple, user-friendly web application that provides real-time weather updates and forecasts for any location around the world. It uses a public Weather API to fetch accurate weather data and presents it in an intuitive and visually appealing interface built with HTML, CSS, and JavaScript.

---

## Features

- **Real-Time Weather Data**: Get current weather conditions for any city, including temperature, humidity, wind speed, and more.
- **5-Day Weather Forecast**: View weather predictions for the next five days, including day-to-day conditions.
- **Search Functionality**: Search for weather updates by entering the name of a city or location.
- **Responsive Design**: Works seamlessly on desktops, tablets, and mobile devices.
- **Dynamic Background**: The application's background changes dynamically based on the current weather condition (e.g., sunny, rainy, cloudy).
- **Error Handling**: Displays user-friendly error messages for invalid city names or API errors.

---

## Technologies Used

1. **Frontend**:
   - **HTML**: Provides the structure of the application.
   - **CSS**: Used to style the application with a visually appealing and responsive design.
   - **JavaScript**: Implements functionality, API integration, and dynamic updates.

2. **API**:
   - **Weather API**: Fetches real-time weather data. (You can use APIs like [OpenWeatherMap](https://openweathermap.org/api) or [WeatherAPI](https://www.weatherapi.com/)).

---

## Installation and Setup

### Prerequisites
- A modern web browser.
- Internet connection for API requests.

### Steps
1. Clone the repository or download the code:
   ```bash
   git clone https://github.com/yourusername/weather-forecasting-app.git
   cd weather-forecasting-app
   ```

2. Open the `index.html` file in your browser to view the application.

3. Replace the placeholder API key in the JavaScript file with your own API key from the weather service provider.

   Example (in `script.js`):
   ```javascript
   const apiKey = "YOUR_API_KEY_HERE";
   ```

---

## File Structure

```
weather-forecasting-app/
├── index.html        # Main HTML file
├── style.css         # Stylesheet for the application
├── script.js         # JavaScript containing the app logic
└── README.md         # Documentation for the project
```

---

## Usage

1. Open the web application in your browser.
2. Enter the name of a city in the search bar and click the search button.
3. View the current weather conditions and a 5-day forecast for the city.
4. The background of the application will dynamically change based on the weather condition.

---

## Example Output

### Current Weather
- Temperature: 25°C
- Condition: Sunny
- Humidity: 60%
- Wind Speed: 10 km/h

### 5-Day Forecast
| Day       | Condition | Temperature |
|-----------|-----------|-------------|
| Monday    | Rainy     | 22°C        |
| Tuesday   | Sunny     | 28°C        |
| Wednesday | Cloudy    | 24°C        |
| Thursday  | Rainy     | 21°C        |
| Friday    | Sunny     | 27°C        |

---

## Screenshots

### 1. Home Page
![Home Page](example_home_page.png)

### 2. Search Results
![Search Results](example_search_results.png)

---

## Demo

You can check out the live demo of the application [here](https://yourusername.github.io/weather-forecasting-app/).

---

## API Reference

This application uses the following API:
- [Weather API](https://openweathermap.org/api) or similar.

### Example API Request
```bash
GET https://api.openweathermap.org/data/2.5/weather?q=London&appid=YOUR_API_KEY
```

---

## Contributing

Contributions are welcome! If you have suggestions or want to enhance the application, feel free to fork the repository and create a pull request.

---

## License

This project is licensed under the MIT License. See the `LICENSE` file for more details.

---

## Author

Developed by [Svignesh16](https://github.com/Svignesh16)
