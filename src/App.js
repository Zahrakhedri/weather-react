import "./App.css";
import Search from "./Search";
import Forecast from "./Forecast";

function App() {
  return (
    <div className="App">
      <div className="container  mb-0">
        <Search />
        <Forecast />
      </div>
      <p className="link">
        <a href="https://github.com/Zahrakhedri/weather-react" target="blank">
          Open-source
        </a>
        code, by Zahra Khedri
      </p>
    </div>
  );
}

export default App;
