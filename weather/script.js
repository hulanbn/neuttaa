async function getWeather() {
    const city = document.getElementById("city").value;
    if (!city) {
        alert("hotoo oruulna uu");
        return;
    }

    const apiKey = '8cde2bda8fd86f86ec7045ed2628baf5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

    try {
        const response = await fetch(apiUrl);
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
    document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather-icon").alt = data.weather[0].description;
}
