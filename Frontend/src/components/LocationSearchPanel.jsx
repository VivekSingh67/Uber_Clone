import React from "react";
import "remixicon/fonts/remixicon.css";

const LocationSearchPanel = (props) => {
  const locations = [
    "24B, Near Kapoor's cafe, Sheryians Coding School, Bhopal",
    "22C, Near Malhotra's cafe, Sheryians Coding School, Bhopal",
    "20B, Near Singhaji's cafe, Sheryians Coding School, Bhopal",
    "18A, Near Sharma's cafe, Sheryians Coding School, Bhopal",
  ];

  return (
    <div>
      {locations.map((location, index) => {
        return (
          <div key={index} onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className="flex gap-4 border-2 p-3 border-gray-50 active:border-black rounded-xl items-center my-2 justify-start">
            <h2 className="bg-[#eee] h-8 flex items-center justify-center w-12 rounded-full">
              <i className="ri-map-pin-fill"></i>
            </h2>

            <h4 className="font-medium">
              {location}
            </h4>
          </div>
        );
      })}
    </div>
  );
};

export default LocationSearchPanel;
