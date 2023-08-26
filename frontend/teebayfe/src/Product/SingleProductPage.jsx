import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
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

function SingleProductPage() {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  console.log("ID:", id);

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
        const response = await fetch(`http://localhost:9090/product/${id}`);
        const product = await response.json();

        // console.log("Here Product", product);
        setProduct(product);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [id]);

  if (product === null) {
    return <div>Loading...</div>;
  }
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
