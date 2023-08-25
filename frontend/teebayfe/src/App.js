import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./User/LoginPage";
import SignupPage from "./User/SignupPage";
import Navbar from "./Components/Navbar";
import MyProducts from "./Product/MyProducts";
import RootForm from "./Product/CreateProductForm/RootForm";
import AllProducts from "./Product/AllProducts";
import BorrowedProduct from "./Product/BorrowedProduct";
import BoughtProduct from "./Product/BoughtProduct";
import SoldProduct from "./Product/SoldProduct";
import LentProduct from "./Product/LentProduct";

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
    path: "/borrowed",
    element: <BorrowedProduct />,
  },
  {
    path: "/bought",
    element: <BoughtProduct />,
  },
  {
    path: "/sold",
    element: <SoldProduct />,
  },
  {
    path: "/lent",
    element: <LentProduct />,
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
