import { useEffect, useState } from "react";
import Search from "./components/Search";
import { getWeather } from "./services/fetchingApi";

const App = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getWeather(query);
        console.log(res);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, [query]);

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
