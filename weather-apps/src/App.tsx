import { useEffect, useState } from "react";
import Search from "./components/Search";
import { getWeather } from "./services/fetchingApi";

type WeatherData = {
  current: {
    condition: {
      text: string;
      icon: string;
    };
    temp_c: number;
  };
  location: {
    country: string;
    name: string;
    region: string;
    tz_id: string;
  };
};

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState<WeatherData | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getWeather(query);
        setWeather(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [query]);

  const {
    current: { condition: { text = "", icon = "" } = {}, temp_c = "" } = {},
    location: { country = "", name = "", region = "", tz_id = "" } = {},
  } = weather || {};
  console.log(text, icon, temp_c, country, name, region, tz_id);

  return (
    <div>
      <Search>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </Search>
    </div>
  );
};

export default App;
