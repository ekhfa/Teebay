import React, { useState } from "react";
import { Button, Container, Textarea, Center, Group } from "@mantine/core";

function ThirdForm({ formData, onChange, handleBack, handleNext }) {
  const [isValid, setIsValid] = useState(true);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const validateInput = () => {
    if (!formData.description || formData.description.trim() === "") {
      setIsValid(false);
    } else {
      setIsValid(true);
      handleNext();
    }
  };

  return (
    <Container size="xl" style={{ minHeight: "100vh" }}>
      <Center style={{ width: "100%", marginTop: "8rem" }}>
        <div style={{ width: "100%", maxWidth: 450 }}>
          <Textarea
            name="description"
            value={formData.description}
            onChange={handleInputChange}
            placeholder="Product Description"
            label="Select Description"
            withAsterisk
            style={{ marginBottom: "1rem" }}
          />
          <Group style={{ marginTop: "1rem", justifyContent: "space-between" }}>
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
              onClick={validateInput}
            >
              Next
            </Button>
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default ThirdForm;
