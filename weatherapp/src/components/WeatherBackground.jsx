import React from "react";
import { useState } from "react";
export default function WeatherBackground({weather, children}) {
  const bgClass =
    weather === "Clear"
      ? "bg-gradient-to-b from-yellow-400 to-blue-200"
      : weather === "Clouds"
      ? "bg-gradient-to-b from-gray-400 to-gray-700"
      : weather === "Rain"
      ? "bg-gradient-to-b from-blue-500 to-gray-800"
      : weather === "Snow"
      ? "bg-gradient-to-b from-blue-100 to-blue-300"
      : "bg-gradient-to-b from-indigo-900 to-black";

  return (
    <div className={`min-h-screen flex flex-col items-center justify-center transition-colors duration-700 ${bgClass}`}>
      {children}
    </div>
  );
}
