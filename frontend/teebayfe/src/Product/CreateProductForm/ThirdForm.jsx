import React from 'react';
import { Button, Container, Textarea, Center, Group } from '@mantine/core';

function ThirdForm({formData, onChange, handleBack, handleNext}) {

  console.log("Rendering ThirdForm with formData:", formData);
  
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    //console.log("handleInputChange called with:", name, value);
    onChange({ [name]: value });
  };
  
  return (
    <Container size="xl" style={{ minHeight: '100vh' }}>
      <Center style={{ width: '100%', marginTop: '8rem' }}>
        <div style={{ width: '100%', maxWidth: 450 }}>
          <Textarea
            name="productDescription"
            onChange={handleInputChange}
            placeholder="Product Descrption"
            label="Select Description"
            withAsterisk
            style={{ marginBottom: '1rem' }}
          />
        <Group style={{ marginTop: '1rem', justifyContent: 'space-between' }}>
            <Button size="sm"  style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}  onClick={handleBack}> Back</Button>
            <Button size="sm"  style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} onClick={handleNext}> Next</Button>           
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default ThirdForm;
