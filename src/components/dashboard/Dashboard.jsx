import { useContext, useEffect, useState } from "react";
import BookSearch from "../bookSearch/BookSearch";
import NewBook from "../newBook/NewBook";
import Books from "../books/Books";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Dashboard = () => {
  const [books, setBooks] = useState([]);

  const { handleLogout, user } = useContext(AuthenticationContext);

  useEffect(() => {
    fetch("https://localhost:7248/api/Books/GetAll", {
      method: "GET",
      mode: "cors",
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Error al obtener los libros");
        }
        return response.json();
      })
      .then((booksData) => {
        setBooks(booksData);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const saveBookDataHandler = async (enteredBookData) => {
    const bookDto = {
      ImageUrl: enteredBookData.imageUrl,
      BookRating: enteredBookData.bookRating,
      BookAuthor: enteredBookData.bookAuthor,
      BookTitle: enteredBookData.bookTitle,
      // BookRating: parseInt(enteredBookData.bookRating),
      PageCount: enteredBookData.pageCount,
      id: 0,
    };


    try {
      const response = await fetch("https://localhost:7248/api/Books/AddBook", {
        method: "POST",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookDto),
      });

      if (!response.ok) {
        throw new Error("Failed to add book.");
      }

      const data = await response.json();
      setBooks(data);
    } catch (error) {
      alert(error);
    }
  };

  const searchHandler = (searchTerm) => {
    const filteredBooks = books.filter(
      (book) =>
        book.bookTitle.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.bookAuthor.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setBooks(filteredBooks);
  };

  const onHandleClick = () => {
    handleLogout();
  };

  return (
    <div className="container text-center">
      <button className="btn btn-dark float-end mt-3" onClick={onHandleClick}>
        Cerrar sesión
      </button>
      <h2>Books Champion App</h2>
      <h3>¡Bienvenido {user.email}!</h3>
      <BookSearch onSearch={searchHandler} />
      <NewBook onBookDataSaved={saveBookDataHandler} />
      <Books books={books} />
    </div>
  );
};

export default Dashboard;
