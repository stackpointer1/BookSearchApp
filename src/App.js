import "./styles.css";
import React, { useState } from "react";
import axios from "axios";

export default function App() {
  const [books, setBooks] = useState("");
  const [result, setResult] = useState([]);
  const [apiKey, setApiKey] = useState(
    "AIzaSyDx59QBngFsvV5eDhnJAbBt6ZrB3fjytIs"
  );

  function handleChange(e) {
    const books = e.target.value;
    setBooks(books);
  }
  function handleSubmit(e) {
    e.preventDefault();
    axios
      .get(
        "  https://www.googleapis.com/books/v1/volumes?q=" +
          book +
          "&key=" +
          apiKey +
          "&maxResults=40"
      )
      .then((data) => {
        console.log(data.data.items);
        setResult(data.data.items);
      });
  }
  return (
    <div className="App">
      <header>
        <h4>
          <i className="fas fa-book-reader fa-2x"> BOOK SEARCH </i>
        </h4>
      </header>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            className="form-control mt-10"
            id="book"
            placeholder="search for Book"
            autoComplete="off"
            onChange={handleChange}
          />
          <br />
          <button type="submit" className="btn btn-danger">
            Search
          </button>
        </div>
      </form>

      {result.map((books, index) => (
        // <div key={index}>
        //   {book.volumeInfo.title}
          <a  target="_blank" href={books.volumeInfo.previewLink}>
            <img
              src={books.volumeInfo.imageLinks.thumbnail}
              alt={books.volumeInfo.title}
            />
            <h4>{books.volumeInfo.title}</h4>
          </a>
        // </div>
      ))}
    </div>
  );
}
