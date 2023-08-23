import React from 'react';
import { Container, Center, Text, Paper, Button, Group } from '@mantine/core';

function SummaryForm({ formData, handleBack, handleSubmit }) {
  return (
    <Container size="xl" style={{ minHeight: '100vh' }}>
      <Center style={{ width: '100%', marginTop: '8rem' }}>
        <div style={{ width: '100%', maxWidth: 450 }}>
          <Paper padding="md" shadow="xs">
            <Text align="center" size="xl" style={{ marginBottom: '1rem' }}>
              Summary
            </Text>
            <Text>Product Title: {formData.productTitle}</Text>
            <Text>Product Categories: {formData.productCategories.join(', ')}</Text>
            <Text>Product Description: {formData.productDescription}</Text>
            <Text>Product Price: {formData.productPrice}</Text>
            <Text>Product Rent: {formData.productRent}</Text>
            <Text>Product Days: {formData.productDays}</Text>
          </Paper>
          <Group style={{ marginTop: '1rem', justifyContent: 'center' }}>
            <Button size="sm" 
            style={{ flex: '0.2' }} 
            variant="gradient" 
            gradient={{ from: 'indigo', to: 'cyan' }}  
            onClick={handleBack}>
              Back
            </Button>
            <Button size="sm" style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }} 
             onClick={handleSubmit}>
              Submit
            </Button>
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default SummaryForm;
