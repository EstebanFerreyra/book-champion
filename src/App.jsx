import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import { useState } from "react";
import Protected from "./components/routes/protected/Protected";
import BookDetails from "./components/bookDetails/BookDetails";
import NotFound from "./components/notFound/NotFound";
import MainLayout from "./components/layout/MainLayout";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const loginHandler = () => {
    setIsLoggedIn(true);
  };

  const logOutHandler = () => {
    setIsLoggedIn(false);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected isSignedIn={isLoggedIn}>
          <MainLayout>
            <Dashboard onLogOff={logOutHandler} />
          </MainLayout>
        </Protected>
      ),
    },
    {
      path: "/login",
      element: (
        <MainLayout>
          <Login onLogin={loginHandler} />
        </MainLayout>
      ),
    },
    {
      path: "book/:id",
      element: <BookDetails />,
    },
    {
      path: "*",
      element: <NotFound />,
    },
  ]);

  return (
    <div className="d-flex flex-column align-items-center">
      {<RouterProvider router={router} />}
    </div>
  );
};

export default App;
