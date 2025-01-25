import { useEffect, useState } from "react";
import Search from "./components/Search";
import { searchMovie } from "./services/movieService";

const App = () => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      const data = await searchMovie(query);
      console.log(data);
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
