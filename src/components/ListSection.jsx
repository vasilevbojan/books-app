import React, { useState } from "react";
import BookItem from "./BookItem";

const ListSection = ({ data }) => {
  const [sortOption, setSortOption] = useState("author");
  const sorted = data.sort((a, b) => {
    if (sortOption === "title") {
      return a.title.localeCompare(b.title);
    } else if (sortOption === "author") {
      return a.author.localeCompare(b.author);
    } else {
      return a.genre.localeCompare(b.genre);
    }
  });

  return (
    <>
      <h2>List</h2>
      <select
        name="sortBy"
        onChange={(e) => setSortOption(e.target.value)}
        value={sortOption}
      >
        <option value="title">Title</option>
        <option value="author">Author</option>
        <option value="genre">Genre</option>
      </select>
      <div style={{ display: "flex" }}>
        <div style={{ width: "33%" }}>
          <h3>Title</h3>
        </div>
        <div style={{ width: "33%" }}>
          <h3>Author</h3>
        </div>
        <div style={{ width: "33%" }}>
          <h3>Genre</h3>
        </div>
      </div>
      <hr></hr>
      {sorted.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </>
  );
};

export default ListSection;
