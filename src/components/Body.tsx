import { useState, useEffect, useContext } from "react";
import { WeatherData } from "../utils/types";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useSearchContext } from "./hooks/useSearchContext";

const Body = () => {
  const [data, setData] = useState<WeatherData>();
  const {query, setQuery} = useSearchContext();
  const [loading, setLoading] = useState(false);
  const [toggle, setToggle] = useState(false);
  const [refresh, setRefresh] = useState(0);

  useEffect(() => {
    setLoading(true);
    fetch(
      `http://api.weatherapi.com/v1/current.json?key=${
        import.meta.env.VITE_WEATHER_API_KEY as string
      }&q=${query}&aqi=no`
    ).then((res) =>
      res.json().then((data) => {
        setData(data);
        setLoading(false);
      })
    );
  }, [query, refresh]);

  console.log(refresh)

  if (loading) {
    return (
      <div className="flex justify-center items-center py-60">
        <Loader2 className="animate-spin size-12 text-cyan-300" />
      </div>
    );
  }

  if (data?.error?.message) {
    return (
      <p className="text-center font-bold py-60 text-lg tracking-wide">
        No matching record found. Try again.
      </p>
    );
  }

  const formatDate = `${new Date(data?.location.localtime!)
    .getHours()
    .toString()
    .padStart(2, "0")}:${new Date(data?.location.localtime!)
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
    <div className="flex flex-col gap-2 justify-center h-full">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-center text-lg md:text-xl font-bold">
          Showing results for {query}
        </h1>
        <Button onClick={() => setRefresh((prev) => prev + 1)} disabled={loading}>Refresh Results</Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 mt-8 md:mt-32">
        <div className="bg-secondary mx-auto p-4 border border-border rounded-2xl w-full md:w-[350px] md:hover:bg-gray-900 transition duration-200 ease-in-out">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-xl text-cyan-300">
                {data?.location?.name}
              </p>
              <div className="flex flex-col gap-1">
                <p className="italic text-gray-500 text-sm">
                  {data?.location.region}
                </p>
                <p className="italic text-gray-500 text-sm">
                  {data?.location.country}
                </p>
              </div>
            </div>
            <div>
              <p className="text-md">
                Latitude:{" "}
                <span className="text-cyan-300 font-medium">
                  {data?.location.lat}
                </span>
              </p>
              <p className="text-md">
                Longitude:{" "}
                <span className="text-cyan-300 font-medium">
                  {data?.location.lon}
                </span>
              </p>
            </div>
            <div>
              <p className="text-md">
                Current Time:{" "}
                <span className="text-cyan-300 font-medium">{formatDate}</span>
              </p>
              <p className="text-md">
                Timezone:{" "}
                <span className="text-cyan-300 font-medium">
                  {data?.location.tz_id}
                </span>
              </p>
            </div>
          </div>
        </div>
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
                <Button
                  variant="ghost"
                  className="border border-border p-3 z-10 bg-primary text-black"
                  onClick={() => setToggle(!toggle)}
                >
                  In Fahrenheit?
                </Button>
              </div>
            ) : (
              <div className="flex items-center gap-4 justify-between">
                <p>
                  Temperature:{" "}
                  <span className="text-cyan-300 font-medium">
                    {data?.current.temp_f}°F
                  </span>
                </p>
                <Button
                  variant="ghost"
                  className="border border-border p-3 z-10 bg-primary text-black"
                  onClick={() => setToggle(!toggle)}
                >
                  In Celsius?
                </Button>
              </div>
            )}
            {!toggle ? (
              <p className="italic text-sm text-gray-500">
                Feels like{" "}
                <span className="text-cyan-300">
                  {data?.current.feelslike_c}°C
                </span>
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
            {/* <div className="flex flex-col gap-2 border border-secondary p-3 rounded-xl">
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center gap-2">
                <p>{data?.current.humidity}</p>
                <p>Humidity</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p>{data?.current.cloud}</p>
                <p>Cloud</p>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div className="flex flex-col items-center gap-2">
                <p>{data?.current.precip_mm}</p>
                <p>Min precipitation</p>
              </div>
              <div className="flex flex-col items-center gap-2">
                <p>{data?.current.precip_mm}</p>
                <p>Max Precipitation</p>
              </div>
            </div>
          </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
