import Header from "../navBar/Navbar";
import Navbar from "../navBar/Navbar";
import PropTypes from "prop-types";

const MainLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  );
};

MainLayout.propTypes = {
  children: PropTypes.object,
};
export default MainLayout;
