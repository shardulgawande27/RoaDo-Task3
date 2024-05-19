import React from "react";
import ChartComponent from "./ChartComponent";

const ChartSection = () => {
  const charts = [1, 2, 3, 4];
  return (
    <div className="flex justify-between gap-5 mt-5">
      {charts.map((index) => (
        <ChartComponent key={index} />
      ))}
    </div>
  );
};

export default ChartSection;
