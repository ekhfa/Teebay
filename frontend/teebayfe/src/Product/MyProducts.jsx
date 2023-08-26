import React, { useState, useEffect } from "react";
import {
  Button,
  Group,
  Container,
  Text,
  Title,
  Card,
  ActionIcon,
} from "@mantine/core";
import { FaTrash } from "react-icons/fa";
import { NavLink, useNavigate } from "react-router-dom";

function MyProducts() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();

  const buttonStyle = {
    position: "absolute",
    top: "20px",
    left: "30px",
  };

  const logoutButtonStyle = {
    position: "absolute",
    top: "20px",
    right: "30px",
  };

  const cardContainerStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    width: "90%",
    margin: "20px",
  };

  let userData = JSON.parse(localStorage.getItem("user"));
  console.log(userData);

  useEffect(() => {
    // Fetch products from the backend API
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          `http://localhost:9090/products/user/${userData.user_id}`
        );
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
    navigate(`/editproducts/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      const response = await fetch(
        `http://localhost:9090/product/delete/${id}`,
        {
          method: "DELETE",
        }
      );

      if (response.ok) {
        setProducts((prevProducts) =>
          prevProducts.filter((product) => product.id !== id)
        );
      } else {
        console.error("Failed to delete product");
      }
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  // ... (rest of the code)

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
          My Products!
        </Title>
        <NavLink to="/rootform">
          <Button size="sm" variant="light" style={buttonStyle}>
            Add Product
          </Button>
        </NavLink>
        <Group style={logoutButtonStyle}>
          <Button size="sm" variant="light">
            LOGOUT
          </Button>
        </Group>
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
              }} // Grey background color
              onClick={() => handleCardClick(product.id)}
            >
              <Text size="xl" style={{ marginBottom: "0.5rem" }}>
                {product.title}
              </Text>
              <Text>Categories: {product.categories}</Text>
              <Text>{product.description}</Text>
              <Text>
                Price: {product.price} | Rent: {product.rent_price} {" Per "}
                {product.rent_period}
              </Text>
              <ActionIcon
                position="absolute"
                right="10px"
                top="10px"
                size="md"
                style={{
                  backgroundColor: "transparent",
                  border: "none",
                  outline: "none",
                  padding: 0,
                  cursor: "pointer",
                  position: "absolute",
                  right: "10px",
                  top: "10px",
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent event propagation
                  handleDelete(product.id);
                }}
              >
                <FaTrash />
              </ActionIcon>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default MyProducts;
