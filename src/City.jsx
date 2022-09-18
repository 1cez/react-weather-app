import React from "react";

function City({ city }) {
  return (
    <div>
      <div>
        <h1 className="bg-red-500 text-amber-50 font-bold">Sıcaklık : {city.main.temp}</h1>
        <h1 className="bg-yellow-500 text-amber-50 font-bold">Ülke : {city.name}</h1>
        <h1 className="bg-green-500 text-amber-50 font-bold ">Hava Yorumu : {city.weather[0].description}</h1>
      </div>
    </div>
  );
}

export default City;
