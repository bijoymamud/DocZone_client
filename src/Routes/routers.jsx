import {
  createBrowserRouter
} from "react-router-dom";
import Main from "../Layout/Main";
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
        path: "/singleDoc/:id",
        element: <DocDetails />,


      },
    ]
  },
]);

