import { useContext, useRef, useState } from "react";
import { Alert, Button, Card, Form, FormGroup } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { AuthenticationContext } from "../../services/authentication/authentication.context";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [errors, setErrors] = useState({
    email: false,
    password: false,
    exist: false,
  });

  const emailRef = useRef(null);
  const passwordRef = useRef(null);

  const navigate = useNavigate();

  const { handleLogin } = useContext(AuthenticationContext);

  const changeEmailHandler = (event) => {
    setErrors({ ...errors, email: false });
    setEmail(event.target.value);
  };

  const changePasswordHandler = (event) => {
    setErrors({ ...errors, password: false });
    setPassword(event.target.value);
  };

  const loginHandler = (event) => {
    event.preventDefault();

    if (!emailRef.current.value) {
      emailRef.current.focus();
      setErrors({ ...errors, email: true });
      return;
    }

    if (!password) {
      passwordRef.current.focus();
      setErrors({ ...errors, password: true });
      return;
    }

    setErrors({ ...errors, exist: false });

    handleLogin(email);
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <Card className="p-3 px-5 shadow">
        <Card.Body>
          <h5 className="text-center mb-4">¡Bienvenidos a Books Champion!</h5>
          <Form>
            <FormGroup className="mb-4">
              <Form.Control
                type="email"
                required
                placeholder="Ingresar email"
                onChange={changeEmailHandler}
                ref={emailRef}
                value={email}
                className={errors.email && "border border-danger"}
              />
            </FormGroup>
            <FormGroup className="mb-4">
              <Form.Control
                className={errors.password && "border border-danger"}
                type="password"
                required
                placeholder="Ingresar contraseña"
                onChange={changePasswordHandler}
                value={password}
                ref={passwordRef}
              />
            </FormGroup>
            <Button
              variant="secondary"
              type="submit"
              onClick={loginHandler}
              block
            >
              Iniciar sesión
            </Button>
          </Form>
          {(errors.email || errors.password) && (
            <div className="mt-3 mb-3">
              <Alert variant="danger">Debe completar todos los campos</Alert>
            </div>
          )}

          {errors.exist && (
            <div className="mt-3 mb-3">
              <Alert variant="danger">No soy neri</Alert>
            </div>
          )}
        </Card.Body>
      </Card>
    </div>
  );
};

export default Login;
