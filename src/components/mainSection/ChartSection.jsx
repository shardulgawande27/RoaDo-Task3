import React from "react";
import ChartComponent from "./ChartComponent";

const ChartSection = () => {
  const charts = [1, 2, 3, 4];
  return (
    <div className="flex flex-wrap justify-between gap-5 mt-5">
      {charts.map((index) => (
        <div key={index} className="flex-shrink-0 w-[calc(25%-1.25rem)]">
          <ChartComponent />
        </div>
      ))}
    </div>
  );
};

export default ChartSection;
