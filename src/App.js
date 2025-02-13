import "./App.css";
import Header from "./components/Header";
import ListSection from "./components/ListSection";
import SearchBar from "./components/SearchBar";
import React, { useState, useEffect } from "react";
import data from "./data/books.json";
import Papa from "papaparse";

const searchResults = (array, searchTerm) => {
  return array.filter((obj) => {
    return Object.values(obj).find(
      (value) =>
        typeof value === "string" &&
        value.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });
};

function App() {
  const [searchWord, setSearchWord] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [mergedData, setMergedData] = useState([]);

  /*Downloads through Papa Parse, fetches the file itself from the public folder, 
  processes it, and gives out the result in a complete callback. Then merges the data from book.json
   and book.csv, returning an array with unique objects by ID */
  useEffect(() => {
    async function getData() {
      Papa.parse("./books.csv", {
        header: true,
        download: true,
        dynamicTyping: (e) => (e === "id" ? true : false),
        complete: (results) => {
          const mergedArray = data.concat(
            results.data.filter((item2) => {
              const found = data.find((item1) => item1.id === item2.id);
              return !found;
            })
          );
          setMergedData(mergedArray);
          setIsLoading(false);
        },
      });
    }
    getData();
  }, []);

  const result = React.useMemo(
    () => searchResults(mergedData, searchWord),
    [mergedData, searchWord]
  );
  return (
    <div>
      <Header />
      <SearchBar setSearchWord={setSearchWord} />
      <ListSection
        data={result}
        searchWord={searchWord}
        isLoading={isLoading}
      />
    </div>
  );
}

export default App;
