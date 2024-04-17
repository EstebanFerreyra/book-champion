import { useState } from "react";
import PropTypes from "prop-types";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

const BookSearch = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [showSearch, setShowSearch] = useState(true);

  const handleClick = () => {
    setShowSearch(!showSearch);
  }

  const handleSearch = () => {
    onSearch(searchTerm);
  };

  return (
    <>
      <Button onClick={handleClick}>
        {showSearch ? "Esconder" : "Mostrar"}
      </Button>
      { showSearch && 
      <Row className="justify-content-center">
        <Col md={6} lg={4}>
          <Form>
            <Form.Group controlId="formBasicSearch">
              <Form.Control
                type="text"
                placeholder="Buscar libro por nombre"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </Form.Group>
            <Button variant="primary" onClick={handleSearch}>
              Buscar
            </Button>
          </Form>
        </Col>
      </Row>
};
    </>
  );
};

BookSearch.propTypes = {
  onSearch: PropTypes.func.isRequired,
};

export default BookSearch;
