import React from "react";
import ReactDom from "react-dom";

// import css
import "./index.css";

// Always remeber when we use react then we should make a function with fist letter capital
import {book} from './book-data'
import Book from './Book-function'

const BookList = () => {
  return (
    <section className="booklist">
      {book.map((book) => {
        return <Book book={book}></Book>;
      })}
    </section>
  );
};


ReactDom.render(<BookList />, document.getElementById("root"));
