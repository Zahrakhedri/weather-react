import React from "react";

function Forecast() {
  return (
    <div className="Forecast d-flex justify-content-between">
      <ul>
        <li>Sun</li>
        <li>
          <img src="#" alt="weather icon" />
        </li>
        <li>10℃</li>
      </ul>
      <ul>
        <li>Mon</li>
        <li>
          <img src="#" alt="weather icon" />
        </li>
        <li>12℃</li>
      </ul>
      <ul>
        <li>Tue</li>
        <li>
          <img src="#" alt="weather icon" />
        </li>
        <li>9℃</li>
      </ul>
      <ul>
        <li>Wed</li>
        <li>
          <img src="#" alt="weather icon" />
        </li>
        <li>11℃</li>
      </ul>
      <ul>
        <li>Tur</li>
        <li>
          <img src="#" alt="weather icon" />
        </li>
        <li>13℃</li>
      </ul>
    </div>
  );
}

export default Forecast;
