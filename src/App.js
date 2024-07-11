import "./App.css";
import Header from "./components/Header";
import ListSection from "./components/ListSection";
import SearchBar from "./components/SearchBar";
import React, { useState } from "react";
import FetchData from "./components/FetchData";

const searchResults = (array, searchTerm) => {
  return array.filter((obj) => {
    return Object.values(obj).some(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
};

function App() {
  const [searchWord, setSearchWord] = useState("");

  const result = searchResults(FetchData(), searchWord);
  return (
    <div className="App">
      <Header />
      <SearchBar setSearchWord={setSearchWord} />
      <ListSection data={result} searchWord={searchWord} />
    </div>
  );
}

export default App;
