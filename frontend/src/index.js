import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Profile from "./pages/Profile";
import App from "./App";
import { Provider } from "react-redux";
import Cart from "./pages/Cart";
import reportWebVitals from "./reportWebVitals";
import Shop from "./pages/Shop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// import Slider from "./components/Slider";
import Index from "./sections/Index";
import Details from "./sections/Details";
import Login from "./sections/Login";
import Register from "./sections/Register";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Checkout from "./pages/Checkout";
import OrderConfirmation from "./pages/OrderConfirmation";
import MyAccount from "./pages/MyAccount";
import Orders from "./pages/Orders";
import OrderDetails from "./pages/OrderDetails";
import Address from "./pages/Address";
import AddAddress from "./pages/AddAddress";
import AccountDetails from "./pages/AccountDetails";
import EditAddress from "./pages/EditAddress";
import store from "./store";
import Logout from "./sections/Logout";
const router = createBrowserRouter([
  {
    element: <App />,
    path: "",
    children: [
      { index: true, element: <Index /> },
      {
        element: <Shop />,
        path: "/shop",
      },
      {
        element: <Details />,
        path: "/details/:id",
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/checkout",
        element: <Checkout />,
      },
      {
        path: "/logout",
        element: <Logout />,
      },
      {
        path: "/confirmation",
        element: <OrderConfirmation />,
      },
      {
        path: "/profile/",
        element: <Profile />,
        children: [
          {
            path: "",
            index: true,
            element: <MyAccount />,
          },
          { path: "accountDetails", element: <AccountDetails /> },
          { path: "orders", element: <Orders /> },
          { path: "orderDetails/:id", element: <OrderDetails /> },
          { path: "address", element: <Address /> },
          { path: "addAddress", element: <AddAddress /> },
          { path: "editAddress/:id", element: <EditAddress /> },
        ],
      },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
