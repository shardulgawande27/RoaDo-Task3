import React from "react";
import Chart from "react-apexcharts";

const ChartComponent = () => {
  const options = {
    stroke: {
      width: 0,
    },

    dataLabels: {
      enabled: false,
    },
    series: [2, 4, 5],
    legend: {
      show: false,
    },
    labels: ["A", "B", "C"],
    plotOptions: {
      pie: {
        expandOnClick: false,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              showAlways: true,
            },
          },
        },
      },
    },
  };

  const series = [2, 4, 5];

  return (
    <div
      className="text- font-semibold flex flex-col bg-[#FFFFFF] h-[330px] py-3 rounded-xl"
      style={{ boxShadow: "rgba(0, 0, 0, 0.05) 0px 1px 2px 0px" }}
    >
      <div className="w-[100%] pl-4">Orders</div>
      <div className="w-[80%]">
        <Chart options={options} series={series} type="donut" />
      </div>
      <div className="flex flex-col gap-2  w-[200px] mx-auto mt-2">
        <div className="flex bg-gradient-to-r from-white to-[#FFCB49] gap-5 justify-between items-center py-1 text-xs text-black whitespace-nowrap rounded max-w-[200px] px-2">
          <div>Upcoming</div>
          <div>50</div>
        </div>
        <div className="flex bg-gradient-to-r from-white to-[#7464FF] gap-5 justify-between items-center py-1 text-xs text-black whitespace-nowrap rounded max-w-[200px] px-2">
          <div>Upcoming</div>
          <div>50</div>
        </div>
        <div className="flex bg-gradient-to-r from-white to-[#4FD2B5] gap-5 justify-between items-center py-1 text-xs text-black whitespace-nowrap rounded max-w-[200px] px-2">
          <div>Upcoming</div>
          <div>50</div>
        </div>
      </div>
    </div>
  );
};

export default ChartComponent;
