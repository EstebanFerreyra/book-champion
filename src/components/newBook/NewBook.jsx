import { useReducer } from "react";
import { Button, Card, Col, Form, Row } from "react-bootstrap";
import PropTypes from "prop-types";

const initialBookForm = {
  id: 0,
  title: "",
  author: "",
  rating: "",
  pageCount: "",
  imageUrl: "",
  formValid: false,
};

const bookFormReducer = (state, action) => {
  switch (action.type) {
    case "TITLE_UPDATED":
      return {
        ...state,
        title: action.value,
        formValid:
          action.value && state.author && state.rating && state.pageCount,
      };

    case "AUTHOR_UPDATED":
      return {
        ...state,
        author: action.value,
        formValid:
          action.value && state.title && state.rating && state.pageCount,
      };
    case "RATING_UPDATED":
      return {
        ...state,
        rating: action.value,
        formValid:
          action.value && state.author && state.title && state.pageCount,
      };
    case "PAGECOUNT_UPDATED":
      return {
        ...state,
        pageCount: action.value,
        formValid: action.value && state.author && state.rating && state.title,
      };
    case "IMAGEURL_UPDATED":
      return {
        ...state,
        imageUrl: action.value,
        formValid: state.title && state.author && state.rating && state.title,
      };
    case "RESET_FORM":
      return {
        ...initialBookForm,
        formValid: false,
      };
    default:
      return state;
  }
};

const NewBook = ({ onBookDataSaved }) => {
  const [bookForm, dispatch] = useReducer(bookFormReducer, initialBookForm);

  const changeTitleHandler = (event) => {
    dispatch({
      type: "TITLE_UPDATED",
      value: event.target.value,
    });
  };

  const changeAuthorHandler = (event) => {
    dispatch({
      type: "AUTHOR_UPDATED",
      value: event.target.value,
    });
  };

  const changeRatingHandler = (event) => {
    dispatch({
      type: "RATING_UPDATED",
      value: event.target.value,
    });
  };

  const changePageCountHandler = (event) => {
    dispatch({
      type: "PAGECOUNT_UPDATED",
      value: event.target.value,
    });
  };

  const changeImageUrlHandler = (event) => {
    dispatch({
      type: "IMAGEURL_UPDATED",
      value: event.target.value,
    });
  };

  const submitBookHandler = (event) => {
    event.preventDefault();
    const bookDto = {
      id: 0,
      bookTitle: bookForm.title,
      bookAuthor: bookForm.author,
      bookRating: bookForm.rating !== "" ? parseInt(bookForm.rating, 10) : 0,
      pageCount: parseInt(bookForm.pageCount, 10),
      imageUrl: bookForm.imageUrl,
    };
    onBookDataSaved(bookDto);
    dispatch({
      type: "RESET_FORM",
    });
  };

  return (
    <Card className="m-4 w-50" bg="success">
      <Card.Body>
        <Form className="text-white" onSubmit={submitBookHandler}>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookTitle">
                <Form.Label>Título</Form.Label>
                <Form.Control
                  type="text"
                  required
                  placeholder="Ingresar título"
                  onChange={changeTitleHandler}
                  value={bookForm.title}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookAuthor">
                <Form.Label>Autor</Form.Label>
                <Form.Control
                  onChange={changeAuthorHandler}
                  type="text"
                  placeholder="Ingresar autor"
                  value={bookForm.author}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookRating">
                <Form.Label>Puntuación</Form.Label>
                <Form.Control
                  type="number"
                  onChange={changeRatingHandler}
                  placeholder="Ingresar cantidad de estrellas"
                  value={bookForm.rating}
                  max={5}
                  min={0}
                />
              </Form.Group>
            </Col>
            <Col md={6}>
              <Form.Group className="mb-3" controlId="bookPageCount">
                <Form.Label>Cantidad de páginas</Form.Label>
                <Form.Control
                  onChange={changePageCountHandler}
                  type="number"
                  placeholder="Ingresar cantidad de páginas"
                  value={bookForm.pageCount}
                  min={1}
                />
              </Form.Group>
            </Col>
          </Row>
          <Row className="justify-content-between">
            <Form.Group className="mb-3" controlId="bookImageUrl">
              <Form.Label>URL de imagen</Form.Label>
              <Form.Control
                onChange={changeImageUrlHandler}
                value={bookForm.imageUrl}
                type="text"
                placeholder="Ingresar url de imagen"
              />
            </Form.Group>
          </Row>
          <Row className="justify-content-end">
            <Col md={3} className="d-flex justify-content-end">
              <Button
                disabled={!bookForm.formValid}
                variant="primary"
                type="submit"
              >
                Agregar lectura
              </Button>
            </Col>
          </Row>
        </Form>
      </Card.Body>
    </Card>
  );
};

NewBook.propTypes = {
  onBookDataSaved: PropTypes.func,
};

export default NewBook;
