import React from "react";

const BatteryChargingUI: React.FC = () => {
  
  return (
    <div className="w-full h-screen bg-gray-900 flex items-center justify-center">
    <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg flex flex-col items-center">
        <div className="w-24 h-48 bg-gray-700 rounded-md relative flex items-center justify-center">
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-full w-12 h-4 bg-gray-700 rounded-t-md"></div>
            <div className="w-20 h-40 bg-gradient-to-b from-green-500 to-green-700 rounded-md flex items-end overflow-hidden">
                <div className="bg-green-400 w-full h-1/3 rounded-b-md animate-pulse"></div>
            </div>
        </div>
        <div id="TPA-117-1-wrapper" className="mt-4">
            <p id="TPA-117-1" className="text-lg font-semibold">Charging...</p>
        </div>
    </div>
</div>
  );
};

export default BatteryChargingUI;