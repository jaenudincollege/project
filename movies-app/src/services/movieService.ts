const BASE_URL = "https://api.themoviedb.org/3/";
export const BASE_POSTER_URL = "https://image.tmdb.org/t/p/w500";

export const searchMovie = async (query: string) => {
  const response = await fetch(
    `${BASE_URL}search/movie?api_key=${
      import.meta.env.VITE_API_KEY
    }&query=${query}`
  );
  const data = await response.json();
  return data.results;
};
