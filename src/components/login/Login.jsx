import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Login = ({ onLogin }) => {
  const navigate = useNavigate();

  const handleLogin = () => {
    onLogin();
    navigate("/");
  };

  return <Button onClick={handleLogin}>Iniciar sesión</Button>;
};

Login.propTypes = {
  onLogin: PropTypes.func,
};

export default Login;
