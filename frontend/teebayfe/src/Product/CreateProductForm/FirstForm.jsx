import React, { useState } from 'react';
import { Button, Container, TextInput, Center } from '@mantine/core';

function FirstForm({ formData, onChange, handleNext }) {

  console.log("Rendering FirstForm with formData:", formData);
  //console.log("handleNext prop:", handleNext);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //console.log("handleInputChange called with:", name, value);
    onChange({ [name]: value });
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
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button 
              size="sm" 
              variant="gradient" 
              gradient={{ from: 'indigo', to: 'cyan' }} 
              onClick={handleNext}
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
