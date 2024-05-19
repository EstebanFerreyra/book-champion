import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import Login from "./components/login/Login";
import Protected from "./components/routes/protected/Protected";
import BookDetails from "./components/bookDetails/BookDetails";
import NotFound from "./components/notFound/NotFound";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Protected>
          <Dashboard />
        </Protected>
      ),
    },
    {
      path: "/login",
      element: <Login />,
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
