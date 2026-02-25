async function getWeather() {

    const city = document.getElementById("city").value;

    const apiKey = "71f65b53bb1f82f9f19ee3ed035b3d52";

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

    const response = await fetch(url);
    const data = await response.json();

    document.getElementById("cityName").innerText =
        "City: " + data.name;

    document.getElementById("temp").innerText =
        "Temperature: " + data.main.temp + "\u00B0C";

    document.getElementById("humidity").innerText =
        "Humidity: " + data.main.humidity + "%";

    document.getElementById("condition").innerText =
        "Condition: " + data.weather[0].main;
}