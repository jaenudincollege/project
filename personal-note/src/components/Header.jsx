import { useState } from "react";
import "../styles/header.css";
import Input from "./Input";

function Header() {
  const [query, setQuery] = useState("");

  return (
    <header className="header">
      <div className="header-container">
        <h2 className="header-logo">Notes</h2>
        <Input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder={"search notes ..."}
          className="input-search"
        />
      </div>
    </header>
  );
}

export default Header;
