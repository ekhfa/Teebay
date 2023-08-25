import React, { useState, useEffect } from "react";
import { Container } from "@mantine/core";
import FirstForm from "./FirstForm";
import SecondForm from "./SecondForm";
import ThirdForm from "./ThirdForm";
import ForthForm from "./ForthForm";
import SummaryForm from "./SummaryForm";
import Dashboard from "../MyProducts";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";

function RootForm() {
  const [products, setProducts] = useState([]);
  const [step, setStep] = useState(0);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    categories: [],
    description: "",
    price: "",
    rent_price: "",
    rent_period: "",
  });

  const handleNext = () => {
    //console.log("handleNext called");
    setStep(step + 1);
  };

  const handleBack = () => {
    //console.log("handleBack called");
    setStep(step - 1);
  };

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:9090/product/create",
        formData
      );
      console.log("Product submitted:", response.data);
      setProducts([...products, response.data]);
      navigate("/myproducts");
    } catch (error) {
      console.error("An error occurred", error);
    }
  };

  const handleFormChange = (newData) => {
    setFormData({ ...formData, ...newData });
  };

  const renderStep = () => {
    //console.log("Rendering step:", step);
    switch (step) {
      case 0:
        return (
          <FirstForm
            formData={formData}
            onChange={handleFormChange}
            handleNext={handleNext}
          />
        );
      case 1:
        return (
          <SecondForm
            formData={formData}
            onChange={handleFormChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 2:
        return (
          <ThirdForm
            formData={formData}
            onChange={handleFormChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 3:
        return (
          <ForthForm
            formData={formData}
            onChange={handleFormChange}
            handleNext={handleNext}
            handleBack={handleBack}
          />
        );
      case 4:
        return (
          <SummaryForm
            formData={formData}
            handleBack={handleBack}
            handleSubmit={handleSubmit}
          />
        );
      default:
        return null;
    }
  };

  return <Container size="md">{renderStep()}</Container>;
}

export default RootForm;
