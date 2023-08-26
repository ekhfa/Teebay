import React, { useState } from "react";
import {
  Button,
  Container,
  TextInput,
  Center,
  Group,
  Select,
} from "@mantine/core";

function ForthForm({ formData, onChange, handleBack, handleNext }) {
  console.log("Rendering ForthForm with formData:", formData);

  const [isValid, setIsValid] = useState(true);

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

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    const floatValue = parseFloat(value);
    onChange({ [name]: floatValue });
  };

  const handleSelectChange = (selected) => {
    onChange({ rent_period: selected });
  };

  const validateInputs = () => {
    const { price, rent_price, rent_period } = formData;
    const areInputsValid = price && rent_price && rent_period;

    if (areInputsValid) {
      handleNext();
    }
  };

  return (
    <Container size="xl" style={{ minHeight: "100vh" }}>
      <Center style={{ width: "100%", marginTop: "8rem" }}>
        <div style={{ width: "100%", maxWidth: 450 }}>
          <TextInput
            name="price"
            onChange={handleInputChange}
            placeholder="Product Price"
            value={formData.price}
            label="Select Price"
            type="number"
            withAsterisk
            style={{ marginBottom: "1rem" }}
          />
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <TextInput
              name="rent_price"
              onChange={handleInputChange}
              placeholder="Rent Price"
              value={formData.rent_price}
              label="Select Rent Price"
              type="number"
              withAsterisk
              style={{ marginRight: "1rem" }}
            />
            <Select
              name="rent_period"
              value={formData.rent_period}
              onChange={handleSelectChange}
              data={[...hourlyOptions, ...dailyOptions]}
              label="Select Rent"
              placeholder="Select Rent Period"
              style={{ width: "100%" }}
              transitionProps={{
                transition: "pop-top-left",
                duration: 80,
                timingFunction: "ease",
              }}
              required
            />
          </div>
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
              onClick={validateInputs}
              disabled={!isValid} // Disable the "Next" button if inputs are not valid
            >
              Next
            </Button>
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default ForthForm;
