import React from 'react';
import { Button, Container, TextInput, Center } from '@mantine/core';

function FirstForm() {
  return (
    <Container size="xl" style={{ minHeight: '100vh' }}>
      <Center style={{ width: '100%', marginTop: '8rem' }}>
        <div style={{ width: '100%', maxWidth: 450 }}>
          <TextInput
            placeholder="Product Title"
            label="Select a title for your product"
            withAsterisk
            style={{ marginBottom: '1rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <Button size="sm" variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
              Next
            </Button>
          </div>
        </div>
      </Center>
    </Container>
  );
}

export default FirstForm;
