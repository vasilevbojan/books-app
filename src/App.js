import "./App.css";
import Header from "./components/Header";
import ListSection from "./components/ListSection";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import data from "./data/books.json";
import csvFile from "./data/books.csv";
import Papa from "papaparse";

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
  const [mergedData, setMergedData] = useState([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch(csvFile);
      const reader = response.body.getReader();
      const result = await reader.read();
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value);
      const results = Papa.parse(csv, {
        header: true,
        dynamicTyping: (e) => (e === "id" ? true : false),
      });
      const mergedArray = data.concat(
        results.data.filter(
          (item2) => !data.some((item1) => item1.id === item2.id)
        )
      );
      setMergedData(mergedArray);
    }
    getData();
  }, []);

  const result = searchResults(mergedData, searchWord);
  return (
    <div className="App">
      <Header />
      <SearchBar setSearchWord={setSearchWord} />
      <ListSection data={result} searchWord={searchWord} />
    </div>
  );
}

export default App;
