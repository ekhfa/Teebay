import React, { useState } from "react";
import { Center, Container, Group, Button, MultiSelect } from "@mantine/core";

const categoriesOptions = [
  { value: "Electronics", label: "ELECTRONICS" },
  { value: "Furniture", label: "FURNITURE" },
  { value: "Home Appliances", label: "HOME APPLIANCES" },
  { value: "Sporting Goods", label: "SPORTING GOODS" },
  { value: "Outdoor", label: "OUTDOOR" },
];

function SecondForm({ formData, onChange, handleBack, handleNext }) {
  console.log("Rendering SecondForm with formData:", formData);

  const [selectedCategories, setSelectedCategories] = useState(
    formData.categories || []
  );
  const isSelectionValid = selectedCategories.length > 0;

  const handleSelectChange = (selected) => {
    setSelectedCategories(selected);
  };

  const handleNextWithValidation = () => {
    if (isSelectionValid) {
      onChange({ categories: selectedCategories });
      handleNext();
    }
  };

  return (
    <Container size="xl" style={{ minHeight: "100vh" }}>
      <Center>
        <div style={{ width: "100%", maxWidth: 450 }}>
          <MultiSelect
            name="categories"
            value={selectedCategories}
            onChange={handleSelectChange}
            style={{ width: "100%", marginTop: "8rem" }}
            label="Select Categories"
            placeholder="Select"
            data={categoriesOptions}
            transitionProps={{
              transition: "pop-top-left",
              duration: 80,
              timingFunction: "ease",
            }}
            multiple
            required
            error={!isSelectionValid} // Highlight the multi-select if not valid
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
              onClick={handleNextWithValidation} // Use handleNextWithValidation to check validity before proceeding
            >
              Next
            </Button>
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default SecondForm;
