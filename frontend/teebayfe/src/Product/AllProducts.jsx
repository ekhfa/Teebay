import React, { useState, useEffect } from "react";
import {
  createStyles,
  Button,
  Group,
  Container,
  Text,
  Title,
  Card,
  rem,
} from "@mantine/core";
import { NavLink, useNavigate } from "react-router-dom";

function AllProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const cardContainerStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    width: "90%",
    margin: "20px",
  };

  useEffect(() => {
    // Fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:9090/products`);
        const products = await response.json();

        console.log("Here Products", products);
        setProducts(products);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  const handleCardClick = (id) => {
    navigate(`/products/${id}`);
  };

  return (
    <div
      style={{
        position: "relative",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Container size="xl" style={{ paddingTop: "60px", flex: 1 }}>
        <Title
          align="center"
          sx={(theme) => ({
            fontFamily: `Greycliff CF, ${theme.fontFamily}`,
            fontWeight: 900,
          })}
        >
          All Products!
        </Title>
        <div style={{ ...cardContainerStyle, gridTemplateColumns: "1fr" }}>
          {products.map((product) => (
            <Card
              key={product.id}
              shadow="sm"
              padding="lg"
              style={{
                cursor: "pointer",
                marginBottom: "20px",
                backgroundColor: "#f0f0f0",
                display: "flex",
                flexDirection: "column",
                width: "600px",
                height: "300px",
              }} // Grey background color
              onClick={() => handleCardClick(product.id)}
            >
              <div
                style={{
                  alignSelf: "flex-end",
                  marginTop: "0.2 rem",
                  marginRight: "0.5rem",
                }}
              >
                {product.status === "bought" && (
                  <span style={{ color: "red" }}>Sold</span>
                )}
                {product.status === "rented" && (
                  <span style={{ color: "blue" }}>On Rent</span>
                )}
                {product.status === "available" && (
                  <span style={{ color: "green" }}>Available</span>
                )}
              </div>

              <div
                style={{
                  display: "flex",
                  flexDirection: "column",
                  flexGrow: 1,
                }}
              >
                <Text size="xl" style={{ marginBottom: "0.5rem" }}>
                  {product.title}
                </Text>
                <Text>{product.description}</Text>
                <Text>{product.price}</Text>
                <Text>{product.rent_price}</Text>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllProducts;
