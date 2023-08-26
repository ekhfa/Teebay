import React from "react";
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

function SingleProductPage() {
  const navigate = useNavigate();

  const cardContainerStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    width: "90%",
    margin: "20px",
  };

  const products = [
    {
      id: 1,
      title: "Product 1",
      description: "This is the first product description.",
      price: 100,
      rent: 23,
      status: "sold",
    },
  ];

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
          Single Product!
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
                width: "500px",
                height: "300px",
              }} // Grey background color
            >
              {/* Status tag */}
              {/* ... (product status code) */}

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
                <Text>{product.rent}</Text>
              </div>
            </Card>
          ))}
        </div>

        {/* Buttons for Rent and Buy */}
        <Group style={{ marginTop: "1rem", justifyContent: "space-between" }}>
          <Button
            size="sm"
            style={{ flex: "0.2" }}
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
          >
            Rent
          </Button>
          <Button
            size="sm"
            style={{ flex: "0.2" }}
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
          >
            Buy
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default SingleProductPage;
