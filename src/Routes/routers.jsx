import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Homepage/Home";
import DocDetails from "../Pages/Home/SingleDoc/DocDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: '/',
        element: <Home />
      },
      {
        path: '/contact',
        element: <Contact />
      },

      {
        path: "/singleDoc/:id",
        element: <DocDetails />,


      },
    ]
  },
]);

