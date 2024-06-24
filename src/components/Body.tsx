import { useState, useEffect } from "react";
import { WeatherData } from "../utils/types";
import { Loader2 } from "lucide-react";
import { Button } from "./ui/button";
import { useSearchContext } from "../hooks/useSearchContext";
import Location from "./Location";
import Report from "./Report";

const Body = () => {
  const [data, setData] = useState<WeatherData>();
  const { query } = useSearchContext();
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

  return (
    <div className="flex flex-col gap-2 justify-center h-full">
      <div className="flex flex-col gap-4 items-center">
        <h1 className="text-center text-lg md:text-xl font-bold">
          Showing results for {query}
        </h1>
        <Button
          onClick={() => setRefresh((prev) => prev + 1)}
          disabled={loading}
        >
          Refresh Results
        </Button>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-2 mt-8 md:mt-32">
        <Location data={data} />
        <Report data={data} toggle={toggle} setToggle={setToggle} />
      </div>
    </div>
  );
};

export default Body;
