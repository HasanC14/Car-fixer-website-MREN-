import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import About from "../Pages/About/About";
import Blog from "../Pages/Blog/Blog";
import Checkout from "../Pages/Checkout/Checkout";
import Error from "../Pages/Error/Error";
import Home from "../Pages/Home/Home";
import Orders from "../Pages/Orders/Orders";
import Services from "../Pages/Services/Services";
import Login from "../Pages/User/Login/Login";
import Register from "../Pages/User/Register/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      { path: "/", element: <Home></Home> },
      { path: "/blog", element: <Blog></Blog> },
      { path: "/services", element: <Services></Services> },
      { path: "/about", element: <About></About> },
      { path: "/login", element: <Login></Login> },
      { path: "/register", element: <Register></Register> },
      { path: "/orders", element: <Orders></Orders> },
      {
        path: "/services/:id",
        element: <Checkout></Checkout>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
  {
    path: "*",
    element: <Error></Error>,
  },
]);

export default router;
