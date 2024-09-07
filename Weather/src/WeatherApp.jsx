import { useState } from "react";
import Weather from "./Weather";
import WeatherInfo from "./WeatherData";
export default function WeatherApp() {
  const [info, setInfo] = useState({});

  const updateInfo = (weatherinfo) => {
    setInfo(weatherinfo);
  };

  return (
    <div className="dark">
      <div className="weather-app__header">
        <Weather updateinfo={updateInfo} />
        <WeatherInfo info={info} />
      </div>
    </div>
  );
}
