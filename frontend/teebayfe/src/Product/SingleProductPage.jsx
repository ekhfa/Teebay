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
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

function SingleProductPage() {
  const [product, setProduct] = useState(null);
  const [showRentDialog, setShowRentDialog] = useState(false);
  const [showBuyDialog, setShowBuyDialog] = useState(false);
  const [confirmedPurchase, setConfirmedPurchase] = useState(false);
  const [isProductPurchased, setIsProductPurchased] = useState(false);
  const [rentalDates, setRentalDates] = useState({
    rentFrom: null,
    rentTo: null,
  });

  const { id } = useParams();
  const navigate = useNavigate();

  const cardContainerStyle = {
    display: "grid",
    gap: "20px",
    gridTemplateColumns: "repeat(auto-fill, minmax(500px, 1fr))",
    width: "90%",
    margin: "20px",
  };

  const handleBuyClick = () => {
    if (userData.user_id === product.owner_id) {
    } else {
      setShowBuyDialog(true);
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
        setIsProductPurchased(true);
        setShowBuyDialog(false);
        window.alert("Product purchased successfully!");

        //console.log("Product purchased and updated:", updatedProduct);
      } else {
        if (response.status == 403) {
          window.alert("Product On Rent.  Can't buy Right Now!");
        } else {
          window.alert("Something went Wrong!");
        }
        console.error("Error purchasing product:", response.statusText);
      }
    } catch (error) {
      console.error("Error purchasing product:", error);
    }
  };

  const handleCancelBuy = () => {
    setShowBuyDialog(false);
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

  const handleRentClick = () => {
    if (userData.user_id === product.owner_id || isProductPurchased) {
      return;
    }
    setShowRentDialog(true);
  };

  const handleCancelRent = () => {
    setShowRentDialog(false);
  };

  const handleConfirmRent = () => {
    rentProduct();
    setShowRentDialog(false);
  };

  const rentProduct = async () => {
    try {
      const response = await fetch(`http://localhost:9090/rent/product/${id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          rent_from: rentalDates.rentFrom,
          rent_to: rentalDates.rentTo,
          renter_id: userData.user_id,
        }),
      });

      if (response.ok) {
        const { product, rental } = await response.json();

        console.log("Product rented and updated:", product);
        console.log("Rental created:", rental);
      } else {
        if (response.status == 403) {
          window.alert("Time Period Conflict. Please Choose Another Time");
        } else {
          window.alert("Something went Wrong!");
        }
        console.error("Error renting product:", response.statusText);
      }
    } catch (error) {
      console.error("Error renting product:", error);
    }
  };

  const handleDateChange = (dateType, date) => {
    if (dateType === "rentFrom") {
      setRentalDates({ ...rentalDates, rentFrom: date });
    } else if (dateType === "rentTo") {
      setRentalDates({ ...rentalDates, rentTo: date });
    }
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
                alignSelf: "flex-end",
                marginTop: "0.2 rem",
                marginRight: "0.5 rem",
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
            onClick={handleRentClick}
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
            opened={showRentDialog}
            onClose={handleCancelRent}
            size="xs"
            title="Rent Product"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              top: "30%",
              left: "32%",
              transform: "translate(-50%, -50%)",
              maxWidth: "80%",
              width: "35%",
              maxWidth: "200%",
              zIndex: 1000,
            }}
          >
            <Text>Select rental dates:</Text>
            <div style={{ marginBottom: "1rem" }}>
              <Group style={{ justifyContent: "center" }}>
                <DatePicker
                  selected={rentalDates.rentFrom}
                  onChange={(date) => handleDateChange("rentFrom", date)}
                  selectsStart
                  startDate={rentalDates.rentFrom}
                  endDate={rentalDates.rentTo}
                  placeholderText="Rent From"
                  style={{ flex: "0.4", maxWidth: "150px" }}
                />
                <DatePicker
                  selected={rentalDates.rentTo}
                  onChange={(date) => handleDateChange("rentTo", date)}
                  selectsEnd
                  startDate={rentalDates.rentFrom}
                  endDate={rentalDates.rentTo}
                  placeholderText="Rent To"
                  style={{ flex: "0.4", maxWidth: "150px" }}
                />
              </Group>
            </div>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Button
                variant="light"
                style={{ marginRight: "1rem" }}
                onClick={handleCancelRent}
              >
                Cancel
              </Button>
              <Button
                variant="light"
                gradient={{ from: "indigo", to: "cyan" }}
                onClick={handleConfirmRent}
                disabled={!rentalDates.rentFrom || !rentalDates.rentTo}
              >
                Rent
              </Button>
            </div>
          </Dialog>
        </div>

        <div style={{ position: "relative" }}>
          <Dialog
            opened={showBuyDialog}
            onClose={handleCancelBuy}
            size="xs"
            title="Confirm Purchase"
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              position: "fixed",
              top: "30%",
              left: "32%",
              transform: "translate(-50%, -50%)",
              maxWidth: "80%",
              width: "35%",
              maxWidth: "200%",
              zIndex: 1000,
            }}
          >
            <Text>Are you sure you want to buy this product?</Text>
            <div
              style={{
                display: "flex",
                justifyContent: "center",
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
