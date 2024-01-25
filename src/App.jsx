import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import Layout from "./Components/Layout/Layout";
import Home from "./Components/Home/Home";
import Products from "./Components/Products/Products";
import Cart from "./Components/Cart/Cart";
import Profile from "./Components/Profile/Profile";
import Details from "./Components/Details/Details";
import Register from "./Components/Register/Register";
import Login from "./Components/Login/Login";
import NotFound from "./Components/NotFound/NotFound";
import { useContext, useEffect } from "react";
import { tokenContext } from "./context/tokenContext";
import ProtectedRoutes from "./Components/ProtectedRoutes/ProtectedRoutes";
import ProtectedSigning from "./Components/ProtectedSigning/ProtectedSigning";
import Checkout from './Components/Checkout/Checkout';
import Allorders from './Components/Allorders/Allorders';
import Contactus from './Components/Contactus/Contactus';
import Orders from './Components/Orders/Orders';
import Addresses from './Components/Addresses/Addresses';
import Accountdetails from './Components/Accountdetails/Accountdetails';
import Wishlist from './Components/Wishlist/Wishlist';

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <ProtectedRoutes>  <Home /> </ProtectedRoutes> },
      { path: "products", element: <ProtectedRoutes> <Products /> </ProtectedRoutes> },
      { path: "contactus", element: <ProtectedRoutes> <Contactus /> </ProtectedRoutes> },
      { path: "cart", element: <ProtectedRoutes> <Cart /> </ProtectedRoutes> },
      {
        path: "profile", element: <ProtectedRoutes> <Profile /> </ProtectedRoutes>, children: [
          { path: "orders", element: <ProtectedRoutes> <Orders /> </ProtectedRoutes> },
          { path: "addresses", element: <ProtectedRoutes> <Addresses /> </ProtectedRoutes> },
          { path: "accountdetails", element: <ProtectedRoutes> <Accountdetails /> </ProtectedRoutes> },
          { path: "wishlist", element: <ProtectedRoutes> <Wishlist /> </ProtectedRoutes> }
        ]
      },
      { path: "details/:id", element: <ProtectedRoutes> <Details /> </ProtectedRoutes> },
      { path: "cart/checkout", element: <ProtectedRoutes> <Checkout /> </ProtectedRoutes> },
      { path: "allorders", element: <ProtectedRoutes> <Allorders /> </ProtectedRoutes> },

      { path: "*", element: <NotFound /> },
    ],
  },
  {
    path: "/login",
    element: <ProtectedSigning> <Login /> </ProtectedSigning>
  },
  {
    path: "/register",
    element: <ProtectedSigning> <Register /> </ProtectedSigning>
  }

]);

function App() {
  let { setToken } = useContext(tokenContext);

  useEffect(() => {
    if (localStorage.getItem("userToken")) {
      setToken(localStorage.getItem("userToken"));
    }
  }, []);

  return <RouterProvider router={routers}></RouterProvider>;
}

export default App;
