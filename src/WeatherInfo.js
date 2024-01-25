import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherTemperature from "./WeatherTemperature";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div>
      <div className="city-date-time">
        <h1>{props.data.city}</h1>
        <WeatherTemperature celsius={props.data.temp} />
        <ul className="list-date">
          <li>
            <FormattedDate date={props.data.date} />
          </li>
          <li className="date-description">{props.data.description}</li>
        </ul>
      </div>
      <div className="weather-conditions">
        <div>
          <WeatherIcon icon={props.icon} alt={props.data.description} />
        </div>
        <ul className="list-weather-conditions">
          <li>
            <span>Feels like:</span> {props.data.feelsLike} ºC
          </li>
          <li>
            <span>Humidity:</span> {props.data.humidity} %
          </li>
          <li>
            <span>Wind:</span> {props.data.wind} km/h
          </li>
        </ul>
      </div>
    </div>
  );
}
