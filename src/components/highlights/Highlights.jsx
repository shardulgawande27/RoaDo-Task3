import React from "react";

const Highlights = () => {
  return (
    <div className="bg-white w-[450px] float-right ml-0">
      <div className=" px-4 py-3">
        <div className="topHeading flex flex-col gap-2">
          <h1 className="font-semibold text-xl">Todays Highlights (14)</h1>
          <p className="text-xs  text-stone-500">19 Mar 2024</p>
        </div>
        <div className="inncomeExpense mt-4">
          <div className="flex gap-5 font-medium max-w-[428px]">
            <div className="flex flex-col flex-1 items-start py-3 pr-9 pl-3 text-xs bg-white rounded border border-solid border-stone-300 text-stone-500">
              <div>Income</div>
              <div className="mt-2 text-lg text-green-700">100000 CAD</div>
              <div className="mt-2">2 payments received</div>
            </div>
            <div className="flex flex-col flex-1 items-start py-3 pr-9 pl-3 text-xs bg-white rounded border border-solid border-stone-300 text-stone-500">
              <div className="text-xs text-stone-500">Expenses</div>
              <div className="mt-2 text-lg text-red-500">50000 CAD</div>
              <div className="mt-2">5 payments paid</div>
            </div>
          </div>
        </div>
        <div className="activities flex flex-col">
          <div className="topHeading mt-7 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Todays Highlights (14)</h3>
            <div className="text-sm underline text-neutral-900 cursor-pointer">
              View All
            </div>
          </div>
          <div className="flex flex-col py-4 text-sm leading-4 text-black bg-white rounded-md mt-4 border border-solid border-stone-300 max-w-[428px]">
            <div className="w-full px-4">
              <span className="text-blue-900">Gurpreet Singh</span> (Dispatch
              team) has created{" "}
              <span className="text-black">Load No. I-I-AAA-1325</span>
            </div>
            <div className="mt-4 w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px]" />
            <div className="mt-4 w-full px-4">
              <span className="text-blue-900">Aman</span> (Driver){" "}
              <span className="text-neutral-900">Picked Up</span> goods at{" "}
              <span className="text-neutral-900">Location_Name</span> for{" "}
              <span className="text-black">Load No. I-I-AAA-1325</span>
            </div>
            <div className="mt-4 w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px]" />
            <div className="mt-4 w-full px-4">
              <span className="text-blue-900">Gurpreet Singh</span> (Dispatch
              team) has created{" "}
              <span className="text-black">Load No. I-I-AAA-1325</span>
            </div>
            <div className="mt-4 w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px]" />
            <div className="mt-4 w-full text-blue-900 px-4">
              Load No. I-I-AAA-1325 <span className="text-stone-500">will</span>{" "}
              <span className="text-stone-500">start added by </span>
              <span className="text-blue-900">Gurpreet Singh</span>
            </div>
          </div>
        </div>
        <div className="activities flex flex-col">
          <div className="topHeading mt-7 flex justify-between items-center">
            <h3 className="font-semibold text-lg">Scheduled Activities (14)</h3>
            <div className="text-sm underline text-neutral-900 cursor-pointer">
              View All
            </div>
          </div>
          <div className="flex flex-col py-4 text-sm leading-4 text-black bg-white rounded-md mt-4 border border-solid border-stone-300 max-w-[428px]">
            <div className="w-full px-4">
              Load No. I-I-AAA-1325{" "}
              <span className="text-stone-500">will be</span>{" "}
              <span className="text-neutral-900">delivered</span>
              <span className="text-blue-900"> by</span>{" "}
              <span className="text-blue-900">Aman</span>{" "}
              <span className="text-blue-900">(Driver)</span>
            </div>
            <div className="mt-4 w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px]" />
            <div className="mt-4 w-full px-4">
              <span className="text-blue-900">Aman</span> (Driver) will{" "}
              <span className="text-neutral-900">Picked Up</span> goods at{" "}
              <span className="text-neutral-900">Location_Name</span> for{" "}
              <span className="text-black">Load No. I-I-AAA-1325</span>
            </div>
            <div className="mt-4 w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px]" />
            <div className="mt-4 w-full px-4">
              Load No. I-I-AAA-1325 <span className="text-stone-500">will</span>{" "}
              <span className="text-stone-500">start added by </span>
              <span className="text-blue-900">Gurpreet Singh</span>
            </div>
            <div className="mt-4 w-full border border-solid bg-stone-300 border-stone-300 min-h-[1px]" />
            <div className="mt-4 w-full text-blue-900 px-4">
              Load No. I-I-AAA-1325 <span className="text-stone-500">will</span>{" "}
              <span className="text-stone-500">start added by </span>
              <span className="text-blue-900">Gurpreet Singh</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Highlights;
