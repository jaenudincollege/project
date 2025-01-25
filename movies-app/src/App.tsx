import { useEffect, useState } from "react";
import Search from "./components/Search";
import { searchMovie, BASE_POSTER_URL } from "./services/movieService";
import Card from "./components/Card";

const App = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await searchMovie(query);
        setMovies(data);
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
      {movies.map((movie) => (
        <Card key={movie.id}>
          <img
            src={`${BASE_POSTER_URL}${movie.poster_path}`}
            alt={`${movie.title} poster image`}
          />
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>
        </Card>
      ))}
    </div>
  );
};

export default App;
