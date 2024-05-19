import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthenticationContext } from "../../../services/authentication/authentication.context";
import PropTypes from "prop-types";

const Protected = ({ children }) => {
  const { user } = useContext(AuthenticationContext);

  if (!user) {
    return <Navigate to="/login" replace />;
  }

  return children;
};

Protected.propTypes = {
  children: PropTypes.object,
};

export default Protected;
