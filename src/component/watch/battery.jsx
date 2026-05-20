import { useEffect, useState } from "react";

const BatteryIndicator = () => {
  const [batteryLevel, setBatteryLevel] = useState(100); // fallback default
  const [charging, setCharging] = useState(false);

  useEffect(() => {
    navigator.getBattery?.().then((battery) => {
      const update = () => {
        setBatteryLevel(Math.round(battery.level * 100));
        setCharging(battery.charging);
      };

      update();

      battery.addEventListener("levelchange", update);
      battery.addEventListener("chargingchange", update);

      return () => {
        battery.removeEventListener("levelchange", update);
        battery.removeEventListener("chargingchange", update);
      };
    });
  }, []);

  return (
    <div className="flex flex-col items-center text-white relative gap-0">
      {/* ⚡ Icon to the left */}
      {charging && (
        <span className="absolute left-[-1.2rem] text-green-400 text-sm font-bold animate-pulse">
          ⚡
        </span>
      )}

      <div className="relative h-5 w-10 border-2 border-white rounded-md">
        {/* Battery level fill */}
        <div
          className={`absolute top-0 left-0 h-full rounded-sm transition-all duration-500 ${
            batteryLevel < 20
              ? "bg-red-500 animate-pulse"
              : charging
              ? "bg-green-400"
              : "bg-yellow-400"
          }`}
          style={{ width: `${batteryLevel}%` }}
        ></div>

        {/* Terminal */}
        <div className="absolute right-[-6px] top-[25%] h-[50%] w-[4px] bg-white rounded-sm" />
      </div>

      {/* Battery Percentage Text */}
      <span className="text-xs font-medium mt-[-0.3rem]">{batteryLevel}%</span>
    </div>
  );
};

export default BatteryIndicator;
