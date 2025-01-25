import { useEffect } from "react";
import Search from "./components/Search";
import { searchMovie } from "./services/movieService";

const App = () => {
  useEffect(() => {
    const fetchData = async () => {
      const data = await searchMovie("Batman");
      console.log(data);
    };
    fetchData();
  }, []);

  return (
    <div>
      <Search />
    </div>
  );
};

export default App;
