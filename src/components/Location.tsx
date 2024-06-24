import { LocationProps } from "../utils/types";

const Location = ({ data }: LocationProps) => {
  const formatDate = `${new Date(data?.location.localtime!)
    .getHours()
    .toString()
    .padStart(2, "0")}:${new Date(data?.location.localtime!)
    .getMinutes()
    .toString()
    .padStart(2, "0")}`;

  return (
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
  );
};

export default Location;
