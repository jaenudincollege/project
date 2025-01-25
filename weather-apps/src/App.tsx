import { useState } from "react";
import Search from "./components/Search";

const App = () => {
  const [query, setQuery] = useState("");

  return (
    <div>
      <Search>
        <input type="text" />
      </Search>
    </div>
  );
};

export default App;
