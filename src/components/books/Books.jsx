import BookItem from "../bookItem/BookItem";
import "./Books.css";
import PropTypes from "prop-types";

const Books = ({ books }) => {
  return (
    <div className="books-container">
      {books.length > 0 ? (books.map((book, index) => (
        <BookItem
          key={index}
          title={book.bookTitle}
          author={book.bookAuthor}
          pageCount={book.pageCount}
          rating={book.bookRating}
          imageUrl={book.imageUrl}
        />
      ))) : (
        <p>NO HAY NADA PARA MOSTRAR</p>
      )}
    </div>
  );
};

Books.propTypes = {
  books: PropTypes.array,
};

export default Books;
