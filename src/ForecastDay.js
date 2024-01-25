import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./Forecast.css";

export default function ForecastDay(props) {
  let icon = props.data.condition.icon;
  let alt = props.data.condition.description;
  let maxTemp = Math.round(props.data.temperature.maximum);
  let minTemp = Math.round(props.data.temperature.minimum);

  function day() {
    let date = new Date(props.data.time * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days[day];
  }
  return (
    <div className="day-forecast">
      <h3>{day()}</h3>
      <WeatherIcon icon={icon} alt={alt} className="icon" />
      <div className="temperatures">
        <span className="forecast-temp-max">{maxTemp}° </span> |{" "}
        <span className="forecast-temp-min">{minTemp}°</span>
      </div>
    </div>
  );
}
