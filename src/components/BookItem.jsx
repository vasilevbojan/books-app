import React from "react";

/* This function highlights the search word contained in the title, author, or genre
   of the books. It uses regular expressions to match all words and returns an array
   of objects with two keys: 'text' and 'highlight', indicating if the text should be highlighted.*/
const highlightTermsToArray = (text, searchWord) => {
  const wordRegex = new RegExp(searchWord, "gi");
  const resultArray = [];
  let lastIndex = 0;

  if (searchWord.length === 0) {
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
    <>
      <div className="list_row">
        <div className="list_columns">
          <p>
            {bookTitle.map((obj) => (
              <span
                key={obj.text}
                className={obj.highlighted ? "highlited" : ""}
              >
                {obj.text}
              </span>
            ))}
          </p>
        </div>
        <div className="list_columns">
          <p>
            {bookAuthor.map((obj) => (
              <span
                key={obj.text}
                className={obj.highlighted ? "highlited" : ""}
              >
                {obj.text}
              </span>
            ))}
          </p>
        </div>
        <div className="list_columns">
          <p>
            {bookGenre.map((obj) => (
              <span
                key={obj.text}
                className={obj.highlighted ? "highlited" : ""}
              >
                {obj.text}
              </span>
            ))}
          </p>
        </div>
      </div>
      <hr className="row_divider"></hr>
    </>
  );
};

export default BookItem;
