import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

function Search() {
  const [city, setCity] = useState("Shiraz");
  const [temperature, setTemperature] = useState(14);
  const [description, setDescription] = useState("Cloudy");
  const [humidity, setHumidity] = useState(17);
  const [wind, setWind] = useState(3.6);
  const [icon, setIcon] = useState(
    ` https://openweathermap.org/img/wn/02d@2x.png`
  );

  function updateCity(event) {
    event.preventDefault();
    setCity(event.target.value);
  }

  function displayTemperature(response) {
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      ` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(displayTemperature);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit}>
        <input
          type="Search"
          placeholder="Type a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="btn btn-primary" />
      </form>
      <div className="row">
        <div className="col-6">
          <h1>{city}</h1>
          <ul>
            <li>finday 3:15</li>
            <li>{description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind speed: {wind}km/h</li>
          </ul>
        </div>
        <div className="col-6">
          <img src={icon} alt={description} />
          <h2 className="d-inline">{temperature}℃</h2>
        </div>
      </div>
    </div>
  );
}

export default Search;
