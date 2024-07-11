import React from "react";

const BookItem = ({ book, searchWord }) => {
  const highlightTermsToArray = (text, substring) => {
    const wordRegex = new RegExp(substring, "gi");
    const resultArray = [];
    let lastIndex = 0;

    let match;
    while ((match = wordRegex.exec(text)) !== null) {
      if (match.index > lastIndex) {
        resultArray.push(text.slice(lastIndex, match.index));
      }

      resultArray.push(
        <span style={{ color: "red", fontWeight: "bold" }}>{match[0]}</span>
      );

      lastIndex = wordRegex.lastIndex;
    }

    if (lastIndex < text.length) {
      resultArray.push(text.slice(lastIndex));
    }
    return resultArray;
  };

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "33%" }}>
        <p>{highlightTermsToArray(book.title, searchWord)}</p>
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
