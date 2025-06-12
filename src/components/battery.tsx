import "@/styles/battery.css";
import { useBattery } from "@/hooks/hook/battery";

const Battery = () => {
  let { supported, loading, level, charging } = useBattery();

  const renderBubbles = () => {
    const bubbles = [];
    for (let i = 0; i < 10; i++) {
      bubbles.push(
        <div key={`bubble-${i + 1}`} className={`bubble x${i + 1}`}></div>
      );
    }

    return bubbles;
  };

  if (!supported) {
    return <div className="font-semibold">Battery is not supported</div>;
  }

  return (
    <div className="flex flex-col items-center">
      <div className=" bg-black h-[1.2rem] rounded-t-[0.9rem] w-12"></div>
      <div className=" w-44 h-72 border-[0.7rem] rounded-[3rem] border-black mt-1 flex items-end overflow-hidden">
        {loading ? (
          <div className="h-full w-full flex items-center justify-center">
            Loading...
          </div>
        ) : (
          <div
            className={`w-full bg-[#79C943] rounded-[2rem] relative overflow-hidden`}
            style={{
              height: `${(level || 0) * 100}%` as string,
              borderTopLeftRadius: level && level < 1 ? 0 : undefined,
              borderTopRightRadius: level && level < 1 ? 0 : undefined,
              backgroundColor:
                level && level < 0.25
                  ? "#FF1D25"
                  : level && level < 0.85
                  ? "#FFC41F"
                  : "#79C943",
            }}
          >
            {charging ? <>{renderBubbles()}</> : null}
          </div>
        )}
      </div>
      <div className="h-8 font-semibold text-sm flex items-center justify-center space-x-2">
        <span>{charging ? "Charging..." : "On Battery"}</span>
        <span>{level ? `(${level * 100}%)` : null}</span>
      </div>
    </div>
  );
};

export default Battery;