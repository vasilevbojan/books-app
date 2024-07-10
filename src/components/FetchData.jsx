import { useEffect, useState } from "react";
import data from "../data/books.json";
import csvFile from "../data/books.csv";
import Papa from "papaparse";

const FetchData = () => {
  const [csvData, setCsvData] = useState([]);
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
      setCsvData(results.data);
    }
    getData();
  }, []);

  const mergedArray = data.concat(
    csvData.filter((item2) => !data.some((item1) => item1.id === item2.id))
  );
  return mergedArray;
};

export default FetchData;
