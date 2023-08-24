import React, { useState } from 'react';
import { Button, Container, TextInput, Center } from '@mantine/core';

function FirstForm({ formData, onChange, handleNext }) {
  const [isValid, setIsValid] = useState(true); // State to track input validity

  //console.log("Rendering FirstForm with formData:", formData);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    onChange({ [name]: value });
  };

  const validateInput = () => {
    if (!formData.productTitle || formData.productTitle.trim() === '') {
      setIsValid(false);
    } else {
      setIsValid(true);
      handleNext();
    }
  };

  return (
    <Container size="xl" style={{ minHeight: '100vh' }}>
      <Center style={{ width: '100%', marginTop: '8rem' }}>
        <div style={{ width: '100%', maxWidth: 450 }}>
          <TextInput
            name="productTitle"
            onChange={handleInputChange}
            value={formData.productTitle || ''}
            placeholder="Product Title"
            label="Select a title for your product"
            withAsterisk
            style={{ marginBottom: '1rem' }}
            error={!isValid} // Highlight the input if it's not valid
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button
              size="sm"
              style={{ flex: '0.2' }}
              variant="gradient"
              gradient={{ from: 'indigo', to: 'cyan' }}
              onClick={validateInput} // Use validateInput function to check validity before proceeding
            >
              Next
            </Button>
          </div>
        </div>
      </Center>
    </Container>
  );
}

export default FirstForm;
