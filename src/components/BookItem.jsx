import React from "react";

const highlightTermsToArray = (text, substring) => {
  const wordRegex = new RegExp(substring, "gi");
  const resultArray = [];
  let lastIndex = 0;

  if (substring.length === 0) {
    resultArray.push({
      highlighted: false,
      text: text,
    });
    return resultArray;
  }

  let match;
  while ((match = wordRegex.exec(text)) !== null) {
    if (match.index > lastIndex) {
      resultArray.push({
        highlighted: false,
        text: text.slice(lastIndex, match.index),
      });
    }

    resultArray.push({ highlighted: true, text: match[0] });

    lastIndex = wordRegex.lastIndex;
  }

  if (lastIndex < text.length) {
    resultArray.push({ highlighted: false, text: text.slice(lastIndex) });
  }
  return resultArray;
};

const BookItem = ({ book, searchWord }) => {
  const bookTitle = React.useMemo(
    () => highlightTermsToArray(book.title, searchWord),
    [book.title, searchWord]
  );

  const bookAuthor = React.useMemo(
    () => highlightTermsToArray(book.author, searchWord),
    [book.author, searchWord]
  );

  const bookGenre = React.useMemo(
    () => highlightTermsToArray(book.genre, searchWord),
    [book.genre, searchWord]
  );

  return (
    <div style={{ display: "flex" }}>
      <div style={{ width: "33%" }}>
        <p>
          {bookTitle.map((obj) => (
            <span
              key={obj.text}
              style={
                obj.highlighted ? { color: "red", fontWeight: "bold" } : {}
              }
            >
              {obj.text}
            </span>
          ))}
        </p>
      </div>
      <div style={{ width: "33%" }}>
        <p>
          {bookAuthor.map((obj) => (
            <span
              key={obj.text}
              style={
                obj.highlighted ? { color: "red", fontWeight: "bold" } : {}
              }
            >
              {obj.text}
            </span>
          ))}
        </p>
      </div>
      <div style={{ width: "33%" }}>
        <p>
          {bookGenre.map((obj) => (
            <span
              key={obj.text}
              style={
                obj.highlighted ? { color: "red", fontWeight: "bold" } : {}
              }
            >
              {obj.text}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
};

export default BookItem;
