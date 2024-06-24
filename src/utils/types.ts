export type WeatherData = {
  location: {
    name: string;
    country: string;
    region: string;
    lat: number;
    lon: number;
    tz_id: string;
    localtime_epoch: number;
    localtime: string;
  };
  current: {
    last_updated: string;
    temp_c: number;
    temp_f: number;
    condition: {
      text: string;
      icon: string;
    };
    feelslike_c: number;
    feelslike_f: number;
    humidity: number;
    cloud: number;
    precip_mm: number;
    precip_in: number;
  };
  error?: {
    code: string;
    message: string;
  };
};

export type ContextProps = {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
};

export type LocationProps = {
  data: WeatherData | undefined;
};

export type ReportProps = {
  data: WeatherData | undefined;
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
};

export type TempButtonProps = {
  toggle: boolean;
  setToggle: React.Dispatch<React.SetStateAction<boolean>>;
  text: string;
};

