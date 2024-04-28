import React from 'react'
import ReactDOM from 'react-dom/client'

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './LayOut/Root';
import Home from './Pages/Home/Home';


import ErrorPage from './Pages/ErrorPage/ErrorPage';

import './index.css'
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import FirebaseProvider from './FirebaseProvider/FirebaseProvider';
import AllTouristsSpot from './Pages/AllTouristsSpot/AllTouristsSpot';
import AddTouristsSpot from './Pages/AddTouristsSpot/AddTouristsSpot';
import MyList from './Pages/MyList/MyList';
import PrivateRoute from './PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root> ,
    errorElement:<ErrorPage></ErrorPage>,
    children:[
      {
        path:"/",
        element:<Home></Home>,
      },
      {
        path:"/login",
        element:<Login></Login>,
      },
      {
        path:"/register",
        element:<Register></Register>,
      },
      {
        path:"/all-tourists-spot",
        element:<AllTouristsSpot></AllTouristsSpot>,
      },
      {
        path:"/add-tourists-spot",
        element:<PrivateRoute><AddTouristsSpot></AddTouristsSpot></PrivateRoute>,
      },
      {
        path:"/my-list",
        element:<PrivateRoute><MyList></MyList></PrivateRoute>,
      }
    ]
  },
]);



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <FirebaseProvider>
      <RouterProvider router={router} />
      </FirebaseProvider>
  </React.StrictMode>,
)
