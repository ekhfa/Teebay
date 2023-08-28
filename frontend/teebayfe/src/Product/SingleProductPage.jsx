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
  const [isProductPurchased, setIsProductPurchased] = useState(false);

  const { id } = useParams();
  const navigate = useNavigate();

  const handleBuyClick = () => {
    if (userData.user_id === product.owner_id) {
    } else {
      setShowDialog(true);
    }
  };

  let userData = JSON.parse(localStorage.getItem("user"));
  //console.log("userId: ", userData.user_id);

  const handleConfirmBuy = async () => {
    try {
      const response = await fetch(`http://localhost:9090/buy/product/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          buyer_id: userData.user_id,
        }),
      });

      //console.log(buyer_id);
      if (response.ok) {
        const updatedProduct = await response.json();
        setConfirmedPurchase(true);
        setIsProductPurchased(true); // Set product purchased flag to true
        setShowDialog(false);

        // Handle the updated product or show an alert
        console.log("Product purchased and updated:", updatedProduct);
        window.alert("Product purchased successfully!");

        // You can also update your local state or navigate to another page
      } else {
        console.error("Error purchasing product:", response.statusText);
      }
    } catch (error) {
      console.error("Error purchasing product:", error);
    }
  };

  const handleCancelBuy = () => {
    setShowDialog(false);
  };

  const cardContainerStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
    width: "90%",
    margin: "20px",
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(`http://localhost:9090/product/${id}`);
        const product = await response.json();
        setProduct(product);

        setIsProductPurchased(product.buyer_id === userData.user_id);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, [id, userData.user_id]);

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
            fontSize: "1.5rem",
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
              width: "100%",
              maxWidth: "600px",
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
              <Text style={{ marginBottom: "0.5rem" }}>
                Categories: {product.categories.join(", ")}
              </Text>
              <Text style={{ marginBottom: "0.5rem" }}>
                Price: ${product.price.toFixed(2)} | Rent: $
                {product.rent_price.toFixed(2)} {" Per "}
                {product.rent_period}
              </Text>
              <Text style={{ marginBottom: "0.5rem" }}>
                {product.description}
              </Text>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "0.5rem",
                }}
              >
                <Text>
                  Date Posted:{" "}
                  {new Date(product.createdAt).toLocaleDateString()}
                </Text>
                <Text>Views: {product.views}</Text>
              </div>
            </div>
          </Card>
        </div>

        <Group style={{ marginTop: "1rem", justifyContent: "space-between" }}>
          <Button
            size="sm"
            style={{ flex: "0.2" }}
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            disabled={
              userData.user_id === product.owner_id || isProductPurchased
            }
          >
            Rent
          </Button>
          <Button
            size="sm"
            style={{ flex: "0.2" }}
            variant="gradient"
            gradient={{ from: "indigo", to: "cyan" }}
            onClick={handleBuyClick}
            disabled={
              userData.user_id === product.owner_id || isProductPurchased
            }
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
