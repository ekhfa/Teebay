import React from 'react';
import { Button, Container, Textarea, Center, Group } from '@mantine/core';

function ThirdForm() {
  return (
    <Container size="xl" style={{ minHeight: '100vh' }}>
      <Center style={{ width: '100%', marginTop: '8rem' }}>
        <div style={{ width: '100%', maxWidth: 450 }}>
          <Textarea
            placeholder="Product Descrption"
            label="Select Description"
            withAsterisk
            style={{ marginBottom: '1rem' }}
          />
         <Group style={{ marginTop: '1rem', justifyContent: 'space-between' }}>
            <Button size="sm"  style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}> Back</Button>
            <Button size="sm"  style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}> Next</Button>           
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default ThirdForm;
