import Battery from "@/components/battery";
import BatteryChargingUI from "./components/batteryChargingUi";

export default function App() {
  return (
    <main className="flex min-h-screen flex-col justify-center items-center">
      <div className="flex flex-col items-center justify-center">
        <Battery />
      </div>
      {/* <BatteryChargingUI/> */}
    </main>
  );
}