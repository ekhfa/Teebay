import React, { useState, useEffect } from "react";
import {
  Container,
  Card,
  Button,
  TextInput,
  MultiSelect,
  Select,
  Textarea,
  Group,
} from "@mantine/core";
import { useNavigate, useParams } from "react-router-dom";

function EditProductPage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [editedProduct, setEditedProduct] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const categoriesOptions = [
    { value: "Electronics", label: "ELECTRONICS" },
    { value: "Furniture", label: "FURNITURE" },
    { value: "Home Appliances", label: "HOME APPLIANCES" },
    { value: "Sporting Goods", label: "SPORTING GOODS" },
    { value: "Outdoor", label: "OUTDOOR" },
    { value: "Toys", label: "TOYS" },
  ];

  const hourlyOptions = [
    { value: "hour", label: "1 Hour" },
    { value: "2 hours", label: "2 Hours" },
    { value: "5 hours", label: "5 Hours" },
    { value: "12 hours", label: "12 Hours" },
  ];

  const dailyOptions = [
    { value: "day", label: "1 Day" },
    { value: "2 days", label: "2 Days" },
    { value: "3 days", label: "3 Days" },
    { value: "4 days", label: "5 Days" },
    { value: "10 days", label: "10 Days" },
  ];

  const handleCategoriesChange = (value) => {
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      categories: value,
    }));
  };

  const handleRentPeriodChange = (value) => {
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      rent_period: value,
    }));
  };

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`http://localhost:9090/product/${id}`);
        const productData = await response.json();
        setEditedProduct(productData);
      } catch (error) {
        console.error("Error fetching product:", error);
      }
    };

    fetchProduct();
  }, [id]);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEditedProduct((prevProduct) => ({
      ...prevProduct,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    try {
      setIsLoading(true);

      const response = await fetch(
        `http://localhost:9090/product/update/${id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(editedProduct),
        }
      );

      setIsLoading(false);

      if (response.ok) {
        navigate("/myproducts");
      } else {
        console.error("Failed to update product");
      }
    } catch (error) {
      console.error("Error updating product:", error);
      setIsLoading(false);
    }
  };

  return (
    <Container
      size="xl"
      style={{
        paddingTop: "60px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Card
        shadow="xs"
        padding="lg"
        style={{
          marginBottom: "20px",
          height: "auto ",
          width: "600px",
          marginTop: "-10rem",
        }}
      >
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="title">Title</label>
          <TextInput
            id="title"
            name="title"
            onChange={handleInputChange}
            value={editedProduct.title || ""}
            placeholder="Product Title"
            style={{ marginTop: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="categories">Categories</label>
          <MultiSelect
            id="categories"
            name="categories"
            value={editedProduct.categories || []}
            onChange={handleCategoriesChange}
            data={categoriesOptions}
            multiple
            style={{ marginTop: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem" }}>
          <label htmlFor="description">Description</label>
          <Textarea
            id="description"
            name="description"
            value={editedProduct.description || ""}
            onChange={handleInputChange}
            placeholder="Product Description"
            style={{ marginTop: "0.5rem" }}
          />
        </div>
        <div style={{ marginBottom: "1rem", display: "flex" }}>
          <div style={{ flex: 2, marginRight: "1rem" }}>
            <label htmlFor="price">Price</label>
            <TextInput
              id="price"
              name="price"
              onChange={handleInputChange}
              placeholder="Product Price"
              value={editedProduct.price || ""}
              type="number"
              style={{ marginTop: "0.5rem" }}
            />
          </div>
          <div style={{ flex: 2, marginRight: "1rem" }}>
            <label htmlFor="rent_price">Rent </label>
            <TextInput
              id="rent_price"
              name="rent_price"
              onChange={handleInputChange}
              placeholder="Rent Price"
              value={editedProduct.rent_price || ""}
              type="number"
              style={{ marginTop: "0.5rem" }}
            />
          </div>

          <div style={{ flex: 2, marginRight: "1rem" }}>
            <label htmlFor="rent_period">Period</label>
            <Select
              id="rent_period"
              name="rent_period"
              value={editedProduct.rent_period || ""}
              onChange={handleRentPeriodChange}
              data={[...hourlyOptions, ...dailyOptions]}
              placeholder="Select Rent Period"
              style={{ marginTop: "0.5rem" }}
            />
          </div>
        </div>

        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <Button onClick={handleSave} loading={isLoading}>
            {isLoading ? "Saving..." : "Save"}
          </Button>
        </div>
      </Card>
    </Container>
  );
}

export default EditProductPage;
