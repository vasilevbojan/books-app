import React from "react";
import { useState } from "react";

const SearchBar = ({ setSearchWord }) => {
  const [searchPhrase, setSearchPhrase] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSearchWord(searchPhrase);
        setSearchPhrase("");
      }}
    >
      <input
        type="text"
        style={{ width: "100%", fontSize: "24px" }}
        placeholder="Search"
        onChange={(e) => setSearchPhrase(e.target.value)}
        value={searchPhrase}
      />
      <button style={{ margin: "10px", fontSize: "24px", padding: "5px" }}>
        Search
      </button>
    </form>
  );
};

export default SearchBar;
