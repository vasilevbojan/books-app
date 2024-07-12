import React, { useState } from "react";
import BookItem from "./BookItem";

const ListSection = ({ data, searchWord, isLoading }) => {
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

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>List</h2>
      <div className="sort_select">
        <p>Sort by</p>
        <select
          name="sortBy"
          onChange={(e) => setSortOption(e.target.value)}
          value={sortOption}
        >
          <option value="title">Title</option>
          <option value="author">Author</option>
          <option value="genre">Genre</option>
        </select>
      </div>
      <div className="list">
        <div className="list_row">
          <div className="list_columns">
            <h3>Title</h3>
          </div>
          <div className="list_columns">
            <h3>Author</h3>
          </div>
          <div className="list_columns">
            <h3>Genre</h3>
          </div>
        </div>
        <hr></hr>
        <div>
          {/*this handles cases to show that there is no results from search or there is no books loaded from the given data*/}
          {sorted.length === 0 && searchWord.length > 0 ? (
            <p>There is no results for your search</p>
          ) : sorted.length === 0 && searchWord.length === 0 ? (
            <>There are no books loaded</>
          ) : (
            sorted.map((book) => (
              <BookItem
                key={book.id}
                book={book}
                searchWord={searchWord}
                isLoading={isLoading}
              />
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default ListSection;
