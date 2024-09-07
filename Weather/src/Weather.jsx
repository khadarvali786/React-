import * as React from "react";
import Alert from "@mui/material/Alert";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";
import Button from "@mui/material/Button";
import "./weather.css";
import { useState, useEffect } from "react";
import LocationOnIcon from "@mui/icons-material/LocationOn";

export default function Weather({ updateinfo }) {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState({ lat: null, long: null });
  const [err, setError] = useState(false);
  const handleSearch = (event) => {
    setCity(event.target.value);
  };

  const URL = `https://api.openweathermap.org/data/2.5/weather`;
  const API_KEY = `b902b8a8beef7c376133dc2813bfefd6`;
  const api = `${URL}?q=${city}&appid=${API_KEY}&units=metric`;

  const getWeather = async () => {
    try {
      const response = await fetch(api);
      const data = await response.json();
      let result = {
        temp: data.main.temp,
        main: data.weather[0].main,
        humidity: data.main.humidity,
        tempMax: data.main.temp_max,
        tempMin: data.main.temp_min,
        description: data.weather[0].description,
        city: data.name,
        country: data.sys.country,
        feelsLike: data.main.feels_like,
      };
      setError(false);
      return result;
    } catch (error) {
      throw error;
    }
  };

  const handleform = async (event) => {
    try {
      event.preventDefault();
      console.log(city);
      setCity("");
      var result = await getWeather();
      updateinfo(result);
    } catch (error) {
      setError(true);
    }
  };

  const getGeoLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(showPosition, errorHandler);
    } else {
      console.error("Geolocation is not supported by this browser.");
    }
    function showPosition(position) {
      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;
      console.log("Latitude: " + latitude + ", Longitude: " + longitude);
      setWeather((currdata) => ({
        ...currdata,
        lat: latitude,
        long: longitude,
      }));
    }

    function errorHandler(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          alert("User denied the request for Geolocation.");
          break;
        case error.POSITION_UNAVAILABLE:
          console.error("Location information is unavailable.");
          break;
        case error.TIMEOUT:
          console.error("The request to get user location timed out.");
          break;
        case error.UNKNOWN_ERROR:
          console.error("An unknown error occurred.");
          break;
      }
    }
  };

  useEffect(() => {
    async function fetchdata() {
      if (weather.lat !== null && weather.long !== null) {
        var result = await getlocationWeather();
        setError(false);
        updateinfo(result);
      }
    }
    fetchdata();
  }, [weather]);

  const getlocationWeather = async () => {
    const api = `${URL}?lat=${weather.lat}&lon=${weather.long}&appid=${API_KEY}&units=metric`;
    const response = await fetch(api);
    const data = await response.json();
    console.log(data);
    let result = {
      temp: data.main.temp,
      humidity: data.main.humidity,
      tempMax: data.main.temp_max,
      tempMin: data.main.temp_min,
      main: data.weather[0].main,
      city: data.name,
      country: data.sys.country,
      feelsLike: data.main.feels_like,
      description: data.weather[0].description,
    };
    setCity(result.city);
    return result;
  };

  return (
    <>
      <div className="text-center">
        <h1 className="text-4xl mb-6 text-center ">Weather App</h1>
        <form className="flex items-center " onSubmit={handleform}>
          <TextField
            className="w-full"
            id="CityName"
            label="Enter City "
            variant="outlined"
            value={city}
            onChange={handleSearch}
          />
          <Button onClick={getGeoLocation}>
            <LocationOnIcon sx={{ fontSize: 40 }} />
          </Button>
          <br />
          <Button variant="contained" color="success" type="submit">
            <SearchIcon />
          </Button>
        </form>
        <br />
        {err && (
          <Alert variant="outlined" severity="error">
            City Not Found
          </Alert>
        )}
      </div>
    </>
  );
}
