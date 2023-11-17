import {
  createBrowserRouter
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import BeDoctor from "../Pages/BeDoctor/BeDoctor";
import MyAppoinments from "../Pages/Dashboard/MyAppoinments/MyAppoinments";
import FindDoc from "../Pages/FindDoctor/FindDoc";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Homepage/Home";
import DocDetails from "../Pages/Home/SingleDoc/DocDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";


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
        path: '/login',
        element: <Login />
      },
      {
        path: '/register',
        element: <Register />
      },
      {
        path: '/findDoc',
        element: <FindDoc />
      },
      {
        path: '/beDoctor',
        element: <PrivateRoute><BeDoctor /></PrivateRoute>
      },



      {
        path: "/singleDoc/:id",
        element: <PrivateRoute><DocDetails /></PrivateRoute>,


      },
    ]

  },

  // {
  //   path: '/dashboard',
  //   element: <Dashboard />,
  //   children: [
  //     {
  //       path: 'myAppointments',
  //       element: <MyAppoinments />
  //     }
  //   ]
  // },

  {
    path: '/dashboard',
    element: <Dashboard />,
    children: [
      {
        path: 'myAppointments',
        element: <MyAppoinments />
      }
    ]
  },
]);

