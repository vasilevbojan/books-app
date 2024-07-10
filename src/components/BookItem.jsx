import React from "react";

const BookItem = ({ book }) => {
  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "33%" }}>
        <p>{book.title}</p>
      </div>
      <div style={{ width: "33%" }}>
        <p>{book.author}</p>
      </div>
      <div style={{ width: "33%" }}>
        <p>{book.genre}</p>
      </div>
    </div>
  );
};

export default BookItem;
