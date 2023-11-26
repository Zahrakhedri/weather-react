import React, { useState } from "react";
import axios from "axios";
import "./Search.css";

function Search() {
  const [city, setCity] = useState("Shiraz");
  const [h1, setH1] = useState("Shiraz");
  const [temperature, setTemperature] = useState(14);
  const [description, setDescription] = useState("Cloudy");
  const [humidity, setHumidity] = useState(17);
  const [wind, setWind] = useState(3.6);
  const [icon, setIcon] = useState(
    ` https://openweathermap.org/img/wn/02d@2x.png`
  );

  function updateCity(event) {
    setCity(event.target.value);
  }

  function displayTemperature(response) {
    setH1(response.data.name);
    setTemperature(response.data.main.temp);
    setDescription(response.data.weather[0].description);
    setHumidity(response.data.main.humidity);
    setWind(response.data.wind.speed);
    setIcon(
      ` https://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
    );
    console.log(response);
  }

  function handleSubmit(event) {
    event.preventDefault();
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=3a94f3778290bfeee61278505dbbe51d&units=metric`;
    axios.get(url).then(displayTemperature);
  }

  return (
    <div className="Search">
      <form onSubmit={handleSubmit} className="input-group p-4 mb-4">
        <input
          class="form-control col-6"
          type="Search"
          placeholder="Type a city..."
          onChange={updateCity}
        />
        <input type="submit" value="Search" className="btn btn-primary col-2" />
      </form>

      <div className="row">
        <div className="col">
          <h1>{h1}</h1>
          <ul>
            <li>finday 3:15</li>
            <li>{description}</li>
            <li>Humidity: {humidity}%</li>
            <li>Wind speed: {wind}km/h</li>
          </ul>
        </div>
        <div className="col">
          <img src={icon} alt={description} />
          <h2 className="d-inline">{Math.round(temperature)}℃</h2>
        </div>
      </div>
    </div>
  );
}

export default Search;
