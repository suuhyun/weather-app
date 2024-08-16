import "./App.css";
import { useEffect, useState } from "react";
import WeatherBox from "./components/WeatherBox";
import WeatherButtons from "./components/WeatherButtons";
import ClipLoader from "react-spinners/ClipLoader";

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState("Current Location");
  const [loading, setLoading] = useState(true);

  const cities = ["Current Location", "Busan", "Madrid", "Sidney", "Vancouver"];

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition((position) => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      getWeatherByCurrentLocation(lat, lon);
    });
  };

  const getWeatherByCurrentLocation = async (lat, lon) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=1d882b08c6f9e192b616a167cb11d957&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  const getWeatherByCity = async (city) => {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=1d882b08c6f9e192b616a167cb11d957&units=metric`;
      setLoading(true);
      const response = await fetch(url);
      const data = await response.json();
      setWeather(data);
      setLoading(false);
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    if (city === "Current Location" || city === null) {
      getCurrentLocation();
    } else {
      getWeatherByCity(city);
    }
  }, [city]);

  return (
    <div className="bg-blue-300 h-screen content-center font-mono">
      <div className="w-1/2 m-auto">
        {loading ? (
          <ClipLoader color="gray" loading={loading} size={150} />
        ) : (
          <>
            <WeatherBox weather={weather} />
            <WeatherButtons cities={cities} setCity={setCity} selected={city}/>
          </>
        )}
      </div>
    </div>
  );
}

export default App;
