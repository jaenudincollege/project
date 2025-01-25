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

  console.log(weather);

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
