import React from "react";
import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="app-container">
        <Weather defaultCity="London" />
        <footer>
          <div>
            <p>
              Designed & Built by{" "}
              <a
                href="https://portfolio-mila-borodkina.netlify.app/"
                target="_blank"
                rel="noreferrer"
              >
                Mila Borodkina
              </a>{" "}
              and is{" "}
              <a
                href="https://github.com/MilaBorodkina/react-weather-project"
                target="_blank"
                rel="noreferrer"
              >
                open-sourced on GitHub
              </a>
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
}
