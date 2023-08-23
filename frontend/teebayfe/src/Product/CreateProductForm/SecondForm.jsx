import React, { useState } from 'react';
import { Select, Center, Container, Group, Button } from '@mantine/core';

const categoriesOptions = [
    'ELECTRONICS', 'FURNITURE', 'HOME APPLIANCES', 'SPORTING GOODS', 'OUTDOOR'
    
  ];

function SecondForm({formData, onChange, handleBack, handleNext }) {

  console.log("Rendering SecondForm with formData:", formData);
  
  const handleSelectChange = (selected) => {
    const updatedCategories = [...formData.productCategories]; // Create a copy of the existing categories
  
    // Check if the selected category is already in the array
    const categoryIndex = updatedCategories.indexOf(selected);
    if (categoryIndex === -1) {
      // If not found, add the selected category
      updatedCategories.push(selected);
    } else {
      // If found, remove the selected category
      updatedCategories.splice(categoryIndex, 1);
    }
  
    onChange({ productCategories: updatedCategories }); // Update the state
  };
  
  return (
    <Container size="xl" style={{ minHeight: '100vh' }}>
      <Center>
        <div style={{ width: '100%', maxWidth: 450 }}>
          <Select
            name="productCategories"
            value={formData.productCategories || []}
            onChange={handleSelectChange}
            style={{ width: '100%', marginTop: '8rem' }}
            label="Select Categories"
            placeholder="Select"
            data={categoriesOptions}
            transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
            multiple
            required
          />
          <Group style={{ marginTop: '1rem', justifyContent: 'space-between' }}>
            <Button size="sm"  style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}
            onClick={handleBack}> Back</Button>
            <Button size="sm"  style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}
            onClick={handleNext}> Next</Button>           
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default SecondForm;
