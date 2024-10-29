async function getWeather() {
    
    const response = await fetch('./weather.json');
    const data = await response.json();
    
    
    document.getElementById("temp-div").textContent = `Temperature: ${data.main.temp}°C`;
    document.getElementById("weather-info").innerHTML = `
        <p>Weather: ${data.weather[0].main} - ${data.weather[0].description}</p>
        <p>Humidity: ${data.main.humidity}%</p>
        <p>Wind Speed: ${data.wind.speed} m/s</p>
    `;
    document.getElementById("weather-icon").src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    document.getElementById("weather-icon").alt = data.weather[0].description;
}
