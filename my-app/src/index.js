import React from "react";
import ReactDom from "react-dom";


// import css
import './index.css';

// Always remeber when we use react then we should make a function with fist letter capital

const BookList = () => {
    return(
        <section className = "booklist">
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
            <Book/>
        </section>
    )
}

const Book = () => {
    return(
        <article className ="book">
            <Image/>
            <Title/>
            <Author/>
        </article>
    )
}

function Image()
{
    return(
        <img src = "https://m.media-amazon.com/images/I/81eB+7+CkUL._AC_UY327_FMwebp_QL65_.jpg" alt = "i love you to moon" />
    )
}

const Title =() => <h1>I Love You to the Moon and Back</h1>
const Author = () => {return <h4>Amelia Hepworth and Tim Warnes</h4>}

ReactDom.render(<BookList />, document.getElementById("root"));
