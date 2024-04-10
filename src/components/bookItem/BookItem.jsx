import "./BookItem.css";
import PropTypes from "prop-types";
import { useState } from "react";
import { Card, Button } from "react-bootstrap";

const BookItem = ({ title, author, pageCount, rating, imageUrl }) => {

  const [newTitle, setNewTitle] = useState(title);

  const handleClick = () => {
    setNewTitle("Aglo")
  }

  return (
    <div>
      <Card>
        <Card.Img
          height={400}
          variant="top"
          src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
        />
        <Card.Body>
          <Card.Title>{newTitle}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <div>{rating?.length} estrellas</div>
          <p>{pageCount} páginas</p>
          <Button className="btn btn-warning" onClick={handleClick}>
            Actulizar titulo
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

BookItem.propTypes = {
  title: PropTypes.string,
  author: PropTypes.string,
  pageCount: PropTypes.number,
  rating: PropTypes.array,
  imageUrl: PropTypes.string,
};

export default BookItem;
