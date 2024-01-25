import React, { useState } from "react";
import axios from "axios";
import WeatherInfo from "./WeatherInfo";
import Forecast from "./Forecast";
import "./Weather.css";

export default function Weather(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [icon, setIcon] = useState("");
  const [city, setCity] = useState(props.defaultCity);
  const [inputValue, setInputValue] = useState("");

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      temp: Math.round(response.data.temperature.current),
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      feelsLike: Math.round(response.data.temperature.feels_like),
      humidity: response.data.temperature.humidity,
      wind: response.data.wind.speed,
      city: response.data.city,
    });
    setIcon(response.data.condition.icon);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
    setInputValue("");
  }

  function handleCityChange(event) {
    setCity(event.target.value);
    setInputValue(event.target.value);
  }

  function search() {
    let apiKey = "4efbbf43t600f8b07428238a0a4o0852";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="weather">
        <form onSubmit={handleSubmit} className="form-search">
          <input
            type="search"
            placeholder="Enter a city"
            className="form-input"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
            value={inputValue}
          />
          <input type="submit" value="Search" className="form-button" />
        </form>
        <WeatherInfo data={weatherData} icon={icon} className="current-icon" />
        <Forecast city={weatherData.city} />
      </div>
    );
  } else {
    search();
    return "Loading...";
  }
}
