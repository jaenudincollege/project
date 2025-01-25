import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [query, setQuery] = useState("");

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
