import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New-York",
    temperature: 12,
    date: "Tuesday 10:00",
    description: "Clear",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  return (
    <div className="Container">
      <div className="weather-app-wrapper">
        <div className="weather-app">
          <form id="search-form">
            <div className="row mt-2">
              <input
                className="col-9 form-control"
                type="search"
                placeholder="Type a city..."
                id="city-input"
              />

              <input
                type="submit"
                value="Search"
                className=" col-3 btn btn-primary w-100"
                id="search-form"
                autocomplete="off"
              />
            </div>
          </form>
          <div className="Overview">
            <h1 id="city">{weatherData.city}</h1>
            <ul>
              <li>
                Last updated: <span id="date"> {weatherData.date}</span>
              </li>
              <li id="description">Clear</li>
            </ul>
          </div>
          <div class="row">
            <div className="col-6">
              <div className="d-flex weather-temperature">
                <img
                  src={weatherData.imgUrl}
                  alt={weatherData.description}
                  id="icon"
                  className="float-left"
                />
                <div className="float-left">
                  <strong id="temperature">{weatherData.temperature}</strong>
                  <span className="units">
                    <button
                      id="celcius-link"
                      class=" weather-temperature active"
                    >
                      {" "}
                      ℃{" "}
                    </button>
                    |<button id="fahrenheit-link"> ℉</button>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-6 flex">
              <ul>
                <li>
                  Humidity: <span id="humidity">{weatherData.humidity}</span>%
                </li>

                <li>
                  Wind: <span id="wind">{weatherData.wind}</span> km/hr
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="text-center">
          <small>
            Open-source code by,{" "}
            <a href="https://github.com/FmBrands/new-weather-react ">
              {" "}
              Modupe Folarin (FmBrands)
            </a>{" "}
          </small>
        </div>
      </div>
    </div>
  );
}
