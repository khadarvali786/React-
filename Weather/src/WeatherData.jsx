import ThunderstormOutlinedIcon from "@mui/icons-material/ThunderstormOutlined";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import WbSunnyIcon from "@mui/icons-material/WbSunny";
import "./WeatherData.css";

export default function WeatherInfo({ info }) {
  var RainUrl =
    "https://images.unsplash.com/photo-1527571083252-f24c32e9d8c1?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";
  var sunUrl =
    "https://cdn.pixabay.com/photo/2018/08/01/10/09/clouded-sky-3576906_1280.jpg";
  var winterUrl =
    "https://images.unsplash.com/photo-1453306458620-5bbef13a5bca?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  function isEmpty(obj) {
    return Object.keys(obj).length != 0;
  }
  var initialInfo = isEmpty(info);
  return (
    <>
      {initialInfo && (
        <div className="weather-info">
          <h1>Weather Info {info.description}</h1>
          <div className="cards " style={{ maxWidth: "400px" }}>
            <img
              src={
                info.humidity > 90
                  ? RainUrl
                  : info.temp < 20
                  ? winterUrl
                  : sunUrl
              }
              alt="green iguana"
              height="200"
              width="350"
            />
            <div className="card-content">
              <h2>
                {info.city}, {info.country}
              </h2>
              <div className="text-secondary">
                <p>
                  Weather : {info.main}&nbsp;&nbsp;
                  {info.humidity > 90 ? (
                    <ThunderstormOutlinedIcon fontSize="large" />
                  ) : info.temp < 20 ? (
                    <AcUnitIcon fontSize="large" />
                  ) : (
                    <WbSunnyIcon fontSize="large" />
                  )}
                </p>
                <p>Temperature : {info.temp}°C</p>
                <p>Max Temperature : {info.tempMax}°C</p>
                <p>Min Temperature : {info.tempMin}°C</p>
                <p>Feels Like : {info.feelsLike}°C</p>
                <p>Humidity : {info.humidity}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
