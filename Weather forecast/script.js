// Select the search input and current weather div
const searchInput = document.querySelector('.search-input');
const currentWeatherDiv = document.querySelector('.current-weather');

// Replace with your actual WeatherAPI key
const API_KEY = "df97dd84f1a14d4dba1194232251104";

// Weather codes for mapping to custom icons
const weatherCodes = {
    clear: [1000],
    clouds: [1003, 1006, 1009],
    mist: [1030, 1135, 1147],
    fog: [1135, 1147],
    rain: [1063, 1150, 1153, 1168, 1171, 1180, 1183, 1198, 1201, 1240, 1243, 1246, 1273, 1276],
    moderate_heavy_rain: [1186, 1189, 1192, 1195, 1243, 1246],
    snow: [1066, 1069, 1072, 1114, 1117, 1204, 1207, 1210, 1213, 1216, 1219, 1222, 1225, 1237, 1249, 1252, 1255, 1258, 1261, 1264, 1279, 1282],
    thunder: [1087, 1279, 1282],
    thunder_rain: [1273, 1276]
};

// Function to fetch weather details
const getWeatherDetails = async (cityName) => {
    const API_URL = `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${cityName}`;

    try {
        const response = await fetch(API_URL);

        // Check if response is successful
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();

        // Extract temperature, description, and weather code
        const temperature = data.current.temp_c;
        const description = data.current.condition.text;
        const weatherCode = data.current.condition.code;

        // Map weather code to corresponding icon
        const weatherIcon = Object.keys(weatherCodes).find(icon =>
            weatherCodes[icon].includes(weatherCode)
        ) || "default"; // Fallback to "default" if no match is found

        // Update the UI
        const weatherIconElement = currentWeatherDiv.querySelector('.weather-icon');
        if (weatherIconElement) {
            weatherIconElement.src = `icon/${weatherIcon}.svg`;
            weatherIconElement.alt = description; // Add alt text for accessibility
        } else {
            console.error("Weather icon element not found in the HTML structure.");
        }

        currentWeatherDiv.querySelector('.temperature').innerHTML = `${temperature}<span>°C</span>`;
        currentWeatherDiv.querySelector('.description').innerText = description;

        console.log(data); // For debugging purposes
    } catch (error) {
        console.error("Error fetching weather details:", error);

        // Update the UI with error messages
        const weatherIconElement = currentWeatherDiv.querySelector('.weather-icon');
        if (weatherIconElement) {
            weatherIconElement.src = `icon/default.svg`;
            weatherIconElement.alt = "Error icon"; // Add alt text for accessibility
        }

        currentWeatherDiv.querySelector('.temperature').innerHTML = "N/A";
        currentWeatherDiv.querySelector('.description').innerText =
            "Failed to fetch weather data. Please try again.";
    }
};

// Add event listener for the search input
searchInput.addEventListener("keyup", (e) => {
    const cityName = searchInput.value.trim();

    // Fetch weather details when the Enter key is pressed
    if (e.key === "Enter" && cityName) {
        getWeatherDetails(cityName);
    }
});