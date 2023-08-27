import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  Button,
  Group,
  Container,
  Text,
  Title,
  Card,
  Dialog,
} from "@mantine/core";

function SingleProductPage() {
  const [product, setProduct] = useState(null);
  const [showDialog, setShowDialog] = useState(false);
  const [confirmedPurchase, setConfirmedPurchase] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleBuyClick = () => {
    setShowDialog(true);
  };

  const handleConfirmBuy = () => {
    setConfirmedPurchase(true);
    setShowDialog(false);
  };

  const handleCancelBuy = () => {
    setShowDialog(false);
  };

  const cardContainerStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
    width: "90%",
    margin: "20px",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:9090/product/${id}`);
        const product = await response.json();
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
            }}
          >
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
            onClick={handleBuyClick}
          >
            Buy
          </Button>
        </Group>

        <div style={{ position: "relative" }}>
          <Dialog
            opened={showDialog}
            onClose={handleCancelBuy}
            size="md"
            title="Confirm Purchase"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              top: "40%",
              left: "37%",
              transform: "translate(-50%, -50%)",
              maxWidth: "80%",
              zIndex: 1000,
            }}
          >
            <Text>Are you sure you want to buy this product?</Text>
            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginTop: "1rem",
              }}
            >
              <Button
                variant="light"
                style={{ marginRight: "1rem" }}
                onClick={handleCancelBuy}
              >
                No
              </Button>
              <Button
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
                onClick={handleConfirmBuy}
              >
                Yes
              </Button>
            </div>
          </Dialog>
        </div>
      </Container>
    </div>
  );
}

export default SingleProductPage;
