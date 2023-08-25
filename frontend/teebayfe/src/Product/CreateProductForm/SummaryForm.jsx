import React from "react";
import { Card, Text, Button, Group, Center } from "@mantine/core";

function ProductSummaryCard({ formData, handleBack, handleSubmit }) {
  return (
    <Center style={{ minHeight: "100vh" }}>
      <div style={{ width: "100%", maxWidth: 450, marginTop: "-5rem" }}>
        <Card
          shadow="sm"
          padding="lg"
          style={{ height: "fit-content", backgroundColor: "white" }}
        >
          <Text align="center" size="xl" style={{ marginBottom: "1rem" }}>
            Summary
          </Text>
          <Text>Product Title: {formData.title}</Text>
          <Text>Product Categories: {formData.categories.join(", ")}</Text>
          <Text>Product Description: {formData.description}</Text>
          <Text>Product Price: {formData.price}</Text>
          <Text>Product Rent Price: {formData.rent_price}</Text>
          <Text>Product Rent Period: {formData.rent_period}</Text>
          <Group style={{ marginTop: "1rem", justifyContent: "center" }}>
            <Button
              size="sm"
              style={{ flex: "0.2" }}
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              size="sm"
              style={{ flex: "0.2" }}
              variant="gradient"
              gradient={{ from: "indigo", to: "cyan" }}
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Group>
        </Card>
      </div>
    </Center>
  );
}

export default ProductSummaryCard;
