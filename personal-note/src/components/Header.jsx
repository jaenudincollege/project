import { useState } from "react";
import "../styles/header.css";
import Input from "./Input";

function Header() {
  const [query, setQuery] = useState("");
  console.log(query);

  return (
    <header className="header">
      <div className="header-container">
        <h2 className="header-logo">Logo</h2>
        <Input value={query} onChange={(e) => setQuery(e.target.value)} />
      </div>
    </header>
  );
}

export default Header;
