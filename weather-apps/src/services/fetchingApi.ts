const getWeather = async (query: string, signal?: AbortSignal) => {
  const res = await fetch(
    `${import.meta.env.VITE_BASE_URL}?key=${
      import.meta.env.VITE_API_KEY
    }&q=${query}`,
    {
      signal,
    }
  );
  const data = await res.json();
  return data;
};

export { getWeather };
