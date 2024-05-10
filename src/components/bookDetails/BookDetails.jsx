import { Button, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

const BookDetails = () => {
  const location = useLocation();
  const navigate = useNavigate();

  const { title, author, pageCount, imageUrl } = location.state.book;

  const clickHandler = () => {
    navigate("/");
  };

  return (
    <Card className="my-3 w-25">
      {" "}
      <Card.Img
        height={400}
        variant="top"
        src={imageUrl !== "" ? imageUrl : "https://bit.ly/47NylZk"}
      />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle>{author}</Card.Subtitle>
        <p className="my-1">
          <b>Páginas</b>: {pageCount}{" "}
        </p>
        {/* <p className="my-3">
          <b>Sinopsis</b>: {"summary"}
        </p> */}
        <Button className="me-2" onClick={clickHandler}>
          Volver a la página principal
        </Button>
      </Card.Body>
    </Card>
  );
};

export default BookDetails;
