import React from "react";

const WeatherBox = ({ weather }) => {
  return (
    <div className="grid lg:grid-cols-2 h-full bg-white rounded-3xl shadow-xl text-center content-center p-10">
      <img
        className="m-auto w-[200px]"
        src={`https://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
        alt=""
      />
      <div className="flex flex-col gap-5 m-auto">
        <div className="xl:text-6xl lg:text-5xl max-lg:text-4xl mb-5">{weather?.name}</div>
        <div className="xl:text-3xl lg:text-2xl max-lg:text-xl flex flex-col gap-2">
          {Math.round(weather?.main.temp)}°C /{" "}
          {Math.round((weather?.main.temp * 9) / 5 + 32)}°F
          <div className="">{weather?.weather[0].description}</div>
        </div>
      </div>
    </div>
  );
};

export default WeatherBox;
