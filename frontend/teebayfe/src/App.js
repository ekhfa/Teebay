import React from "react";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "./User/LoginPage";
import SignupPage from "./User/SignupPage";
import Navbar from "./Components/Navbar";
import Dashboard from "./Product/Dashboard";
import FirstForm from "./Product/CreateProductForm/FirstForm";
import SecondForm from "./Product/CreateProductForm/SecondForm";
import ThirdForm from "./Product/CreateProductForm/ThirdForm";
import ForthForm from "./Product/CreateProductForm/ForthForm";
import FifthForm from "./Product/CreateProductForm/FifthForm";

const router = createBrowserRouter([
  {
    path: "/",
    element: <div>Hello world!</div>,
  },
  {
    path: "/login",
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
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/firstform",
    element: <FirstForm />,
  },
  {
    path: "/secondform",
    element: <SecondForm />,
  },
  {
    path: "/thirdform",
    element: <ThirdForm />,
  },
  {
    path: "/forthform",
    element: <ForthForm />,
  },
  {
    path: "/fifthform",
    element: <FifthForm />,
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
