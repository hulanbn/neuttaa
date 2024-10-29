async function getWeather() {
    const city = document.getElementById("city").value.trim();
    if (!city) {
        alert("Please enter a city name.");
        return;
    }

    if (city !== "Ulaanbaatar") {
        alert("Only weather information for Ulaanbaatar is available.");
        return;
    }

    const apiKey = '8cde2bda8fd86f86ec7045ed2628baf5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            console.error(`Error: ${response.status} ${response.statusText}`);
            alert("Failed to retrieve data. Please check your network connection.");
            return;
        }
        
        const data = await response.json();

        if (data.cod !== 200) {
            alert("City not found. Please try again.");
            return;
        }

        displayWeather(data);
    } catch (error) {
        console.error("Error fetching data:", error);
        alert("Failed to retrieve data. Please check your network connection.");
    }
}

function displayWeather(data) {
    document.getElementById("temp-div").innerHTML = `Temperature: ${data.main.temp}°C`;
    document.getElementById("weather-info").innerHTML = `
        <p>Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weather-icon").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather-icon").alt = data.weather[0].description;
}
