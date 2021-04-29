import React from 'react'

const Book = (props) => {
    // or we can simple take argument in props and do this
    const { img, title, author } = props.book;
    console.log(props.book);
    return (
      <article className="book">
        <img src={img} alt="" />
        <h1>{title}</h1>
        <h4>{author.toUpperCase()}</h4>
      </article>
    );
};

export default Book;
  