import { ReportProps, TempButtonProps } from "../utils/types";
import { Button } from "./ui/button";

function TempButton({ toggle, setToggle, text }: TempButtonProps) {
  return (
    <Button
      variant="ghost"
      className="border border-border p-3 z-10 bg-primary text-black"
      onClick={() => setToggle(!toggle)}
    >
      {text}
    </Button>
  );
}

const Report = ({ data, toggle, setToggle }: ReportProps) => {
  return (
    <div className="bg-secondary mx-auto p-4 border border-border rounded-2xl w-full md:w-[350px] md:hover:bg-gray-900 transition duration-200 ease-in-out">
      <p className="text-lg font-bold text-cyan-400 mb-4">Weather Report</p>
      <div className="flex flex-col gap-3">
        {!toggle ? (
          <div className="flex items-center justify-between">
            <p>
              Temperature:{" "}
              <span className="text-cyan-300 font-medium">
                {data?.current.temp_c}°C
              </span>
            </p>
            <TempButton
              toggle={toggle}
              setToggle={setToggle}
              text="In Fahrenheit?"
            />
          </div>
        ) : (
          <div className="flex items-center gap-4 justify-between">
            <p>
              Temperature:{" "}
              <span className="text-cyan-300 font-medium">
                {data?.current.temp_f}°F
              </span>
            </p>
            <TempButton
              toggle={toggle}
              setToggle={setToggle}
              text="In Celsius?"
            />
          </div>
        )}
        {!toggle ? (
          <p className="italic text-sm text-gray-500">
            Feels like{" "}
            <span className="text-cyan-300">{data?.current.feelslike_c}°C</span>
          </p>
        ) : (
          <p className="italic text-sm text-gray-500">
            Feels like{" "}
            <span className="text-cyan-300 font-medium">
              {data?.current.feelslike_f}°F
            </span>
          </p>
        )}
        <p>
          <div className="flex gap-2 items-center flex-wrap">
            <img src={data?.current.condition.icon} className="size-8" />
            {data?.current.condition.text}
          </div>
        </p>
      </div>
    </div>
  );
};

export default Report;
