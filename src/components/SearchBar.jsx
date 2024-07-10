import React from "react";

const SearchBar = () => {
  return (
    <form>
      <input
        type="text"
        style={{ width: "100%", fontSize: "24px" }}
        placeholder="Search"
      />
      <button
        type="submit"
        style={{ margin: "10px", fontSize: "24px", padding: "5px" }}
      >
        Search
      </button>
    </form>
  );
};

export default SearchBar;
