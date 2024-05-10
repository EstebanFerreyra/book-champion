import "./BookItem.css";
import PropTypes from "prop-types";
import { Card, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const BookItem = ({ title, author, pageCount, rating, imageUrl, id }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/book/${id}`, {
      state: {
        book: {
          title,
          author,
          pageCount,
          imageUrl,
        },
      },
    });
  };

  return (
    <div>
      <Card>
        <Card.Img
          height={400}
          variant="top"
          src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Subtitle>{author}</Card.Subtitle>
          <div>{rating?.length} estrellas</div>
          <p>{pageCount} páginas</p>
          <Button className="btn btn-warning" onClick={handleClick}>
            Ver detalle
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
  id: PropTypes.number,
};

export default BookItem;
