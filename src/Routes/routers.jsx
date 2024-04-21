import {
  createBrowserRouter
} from "react-router-dom";
import Dashboard from "../Layout/Dashboard";
import Main from "../Layout/Main";
import BeDoctor from "../Pages/BeDoctor/BeDoctor";
import AddDoctor from "../Pages/Dashboard/AddDoctor/AddDoctor";
import AppliedDoctor from "../Pages/Dashboard/AppliedDoctor/AppliedDoctor";
import ManageUser from "../Pages/Dashboard/ManageUser/ManageUser";
import MyAppoinments from "../Pages/Dashboard/MyAppoinments/MyAppoinments";
import Payment from "../Pages/Dashboard/Payment/Payment";
import AddReview from "../Pages/Dashboard/Review/AddReview";
import FindDoc from "../Pages/FindDoctor/FindDoc";
import Contact from "../Pages/Home/Contact/Contact";
import Home from "../Pages/Home/Homepage/Home";
// import DocDetails from "../Pages/Home/SingleDoc/DocDetails";
import DetailsLayout from "../Layout/DetailsLayout/DetailsLayout";
import OurDoctors from "../Pages/Home/OurDoctors/OurDoctors";
import Services from "../Pages/Home/Services/Services";
import DocDetails from "../Pages/Home/SingleDoc/DocDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Fail from "../Pages/SslPayment/Fail";
// import Success from "../Pages/SslPayment/Success";
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
        path: '/services',
        element: <Services />
      }
      ,

      {
        path: '/findDoc',
        element: <FindDoc />,
      },
      {
        path: '/beDoctor',
        element: <BeDoctor />
      },
      {
        path: '/ourDoctor',
        element: <OurDoctors />
      },
      // {
      //   path: '/success',
      //   element: <Success />

      // },

      {
        path: '/myAppointments/fail/:id',
        element: <Fail />
      }




    ]


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
    path: 'doctor',
    element: <PrivateRoute><DetailsLayout /></PrivateRoute>,
    children: [
      {
        path: ':id',
        element: <DocDetails />,
        loader: ({ params }) => fetch(` https://doctor-appoinment-server-nine.vercel.app/doctor/${params.id}`)
      }
    ]


  },

  ,




  {
    path: '/dashboard',
    element: <PrivateRoute><Dashboard /></PrivateRoute>,
    children: [


      {
        path: 'myAppointments',
        element: <MyAppoinments />
      },

      {
        path: 'manageUser',
        element: <ManageUser />
      },

      {
        path: 'appliedDoctor',
        element: <AppliedDoctor />
      },
      {
        path: 'addDoctor',
        element: <AddDoctor />
      },
      {
        path: 'payment',
        element: <Payment />
      },
      {
        path: 'addReviews',
        element: <AddReview />
      }

    ]
  },
]);

