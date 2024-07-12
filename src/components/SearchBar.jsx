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
        className="search_input"
        placeholder="Search"
        onChange={(e) => setSearchPhrase(e.target.value)}
        value={searchPhrase}
        autoFocus
      />
      <button className="search_button">Search</button>
    </form>
  );
};

export default SearchBar;
