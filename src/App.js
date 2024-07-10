import "./App.css";
import Header from "./components/Header";
import ListSection from "./components/ListSection";
import SearchBar from "./components/SearchBar";
import data from "./data/books.json";

function App() {
  return (
    <div className="App">
      <Header />
      <SearchBar />
      <ListSection data={data} />
    </div>
  );
}

export default App;
