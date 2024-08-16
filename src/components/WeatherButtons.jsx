import React from "react";

const WeatherButtons = ({ cities, setCity, selected }) => {
  return (
    <div className="w-full grid lg:grid-cols-5 gap-3 mt-8">
      {cities.map((city, i) => (
        <button
          className={`bg-blue-500 ${
            (selected === city) && "bg-blue-800"
          } text-white px-3 py-2 rounded-lg font-bold`}
          onClick={() => setCity(city)}
        >
          {city}
        </button>
      ))}
    </div>
  );
};

export default WeatherButtons;
