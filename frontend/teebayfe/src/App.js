import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./User/LoginPage";
import SignupPage from "./User/SignupPage";
import Navbar from "./Components/Navbar";
import MyProducts from "./Product/MyProducts";
import FirstForm from "./Product/CreateProductForm/FirstForm";
import SecondForm from "./Product/CreateProductForm/SecondForm";
import ThirdForm from "./Product/CreateProductForm/ThirdForm";
import ForthForm from "./Product/CreateProductForm/ForthForm";
import RootForm from "./Product/CreateProductForm/RootForm";
import ProductHistory from "./Product/ProductHistory";
import AllProducts from "./Product/AllProducts";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LoginPage />,
  },
  {
    path: "/signup",
    element: <SignupPage />,
  },
  {
    path: "/navbar",
    element: <Navbar />,
  },
  {
    path: "/rootform",
    element: <RootForm />,
  },
  {
    path: "/myproducts",
    element: <MyProducts />,
  },
  {
    path: "/allproducts",
    element: <AllProducts />,
  },
  {
    path: "/producthistory",
    element: <ProductHistory />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
