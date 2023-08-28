import React, { useState } from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./User/LoginPage";
import SignupPage from "./User/SignupPage";
import MyProducts from "./Product/MyProducts";
import RootForm from "./Product/CreateProductForm/RootForm";
import AllProducts from "./Product/AllProducts";
import BorrowedProduct from "./Product/BorrowedProduct";
import BoughtProduct from "./Product/BoughtProduct";
import SoldProduct from "./Product/SoldProduct";
import LentProduct from "./Product/LentProduct";
import SingleproductPage from "./Product/SingleProductPage";
import EditProductPage from "./Product/EditProductPage";

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
    path: "/rootform",
    element: <RootForm />,
  },
  {
    path: "/myproducts",
    element: <MyProducts />,
  },
  {
    path: "/editproducts/:id",
    element: <EditProductPage />,
  },
  {
    path: "/allproducts",
    element: <AllProducts />,
  },
  {
    path: "/product/:id",
    element: <SingleproductPage />,
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
