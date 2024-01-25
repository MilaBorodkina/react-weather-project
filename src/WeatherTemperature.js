import React, { useState } from "react";

export default function WeatherTemperature(props) {
  const [unit, setUnit] = useState("celsius");

  function convertToFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }

  function convertToCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }

  if (unit === "celsius") {
    return (
      <div className="temperature-container">
        <h2>{props.celsius}</h2>
        <span>
          ºC |{" "}
          <a href="/" onClick={convertToFahrenheit}>
            ºF
          </a>
        </span>
      </div>
    );
  } else {
    let fahrenheit = (props.celsius * 9) / 5 + 32;
    return (
      <div className="temperature-container">
        <h2>{Math.round(fahrenheit)}</h2>
        <span>
          <a href="/" onClick={convertToCelsius}>
            ºC
          </a>{" "}
          | F
        </span>
      </div>
    );
  }
}
