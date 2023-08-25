import React, { useState } from 'react';
import { Button, Container, TextInput, Center, Group, Select } from '@mantine/core';

function ForthForm({ formData, onChange, handleBack, handleNext }) {
  console.log("Rendering ForthForm with formData:", formData);

  const [isValid, setIsValid] = useState(true);

  const hourlyOptions = [
    { value: 'hour-1', label: '1 Hour' },
    { value: 'hour-2', label: '2 Hours' },
    { value: 'hour-5', label: '5 Hours' },
    { value: 'hour-12', label: '12 Hours' },
  ];

  const dailyOptions = [
    { value: 'day-1', label: '1 Day' },
    { value: 'day-2', label: '2 Days' },
    { value: 'day-3', label: '3 Days' },
    { value: 'day-5', label: '5 Days' },
    { value: 'day-10', label: '10 Days' },
  ];

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const handleSelectChange = (selected) => {
    onChange({ productDays: selected });
  };

  const validateInputs = () => {
    const { productPrice, productRent, productDays } = formData;
    const areInputsValid = productPrice && productRent && productDays;
    
    if (areInputsValid) {
      handleNext(); 
    }
  };

  return (
    <Container size="xl" style={{ minHeight: '100vh' }}>
      <Center style={{ width: '100%', marginTop: '8rem' }}>
        <div style={{ width: '100%', maxWidth: 450 }}>
          <TextInput
            name="productPrice"
            onChange={handleInputChange}
            placeholder="Product Price"
            value={formData.productPrice}
            label="Select Price"
            type="number"
            withAsterisk
            style={{ marginBottom: '1rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <TextInput
              name="productRent"
              onChange={handleInputChange}
              placeholder="Rent Price"
              value={formData.productRent}
              label="Select Rent Price"
              type="number"
              withAsterisk
              style={{ marginRight: '1rem' }}
            />
            <Select
              name="productDays"
              value={formData.productDays}
              onChange={handleSelectChange}
              data={[...hourlyOptions, ...dailyOptions]}
              label="Select Rent"
              placeholder="Select"
              style={{ width: '100%' }}
              transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
              required
            />
          </div>
          <Group style={{ marginTop: '1rem', justifyContent: 'space-between' }}>
            <Button
              size="sm"
              style={{ flex: '0.2' }}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              onClick={handleBack}
            >
              Back
            </Button>
            <Button
              size="sm"
              style={{ flex: '0.2' }}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
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
