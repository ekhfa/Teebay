import React from 'react';
import { Button, Container, TextInput, Center, Group, Select } from '@mantine/core';

function ForthForm({formData, onChange, handleBack, handleNext}) {
  
  console.log("Rendering ForthForm with formData:", formData);
  const numberOptions = Array.from({ length: 10 }, (_, index) => ({ value: index + 1, label: (index + 1).toString() }));
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };
  const handleSelectChange = (selected) => {
    onChange({ productDays: selected });
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
              style={{ width: '48%' }}
            />
            <Select
              name="productDays"
              value={formData.productDays}
              onChange={handleSelectChange}
              data={numberOptions}
              label="Select Days"
              placeholder="Select"
              style={{ width: '100%' }}
              transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
              required
            />
          </div>
          <Group style={{ marginTop: '1rem', justifyContent: 'space-between' }}>
            <Button size="sm" style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} 
            onClick={handleBack}>
              Back
            </Button>
            <Button size="sm" style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}
             onClick={handleNext}>
              Next
            </Button>
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default ForthForm;
