import { useEffect, useState } from "react";
import Search from "./components/Search";
import { getWeather } from "./services/fetchingApi";

const App = () => {
  const [query, setQuery] = useState("");
  const [weather, setWeather] = useState([]);

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
    current: { condition: { text, icon } = {}, temp_c } = {},
    location: { country, name, region, tz_id } = {},
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
