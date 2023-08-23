import React from 'react';
import { Button, Container, TextInput, Center, Group, Select } from '@mantine/core';

function ForthForm() {
  const numberOptions = Array.from({ length: 10 }, (_, index) => ({ value: index + 1, label: (index + 1).toString() }));

  return (
    <Container size="xl" style={{ minHeight: '100vh' }}>
      <Center style={{ width: '100%', marginTop: '8rem' }}>
        <div style={{ width: '100%', maxWidth: 450 }}>
          <TextInput
            placeholder="Product Price"
            label="Select Price"
            type="number"
            withAsterisk
            style={{ marginBottom: '1rem' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
            <TextInput
              placeholder="Rent Price"
              label="Select Rent Price"
              type="number"
              withAsterisk
              style={{ width: '48%' }}
            />
            <Select
              data={numberOptions}
              label="Select Days"
              placeholder="Select"
              style={{ width: '48%' }}
              transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
              required
            />
          </div>
          <Group style={{ marginTop: '1rem', justifyContent: 'space-between' }}>
            <Button size="sm" style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
              Back
            </Button>
            <Button size="sm" style={{ flex: '0.2' }} variant="gradient" gradient={{ from: 'indigo', to: 'cyan' }}>
              Next
            </Button>
          </Group>
        </div>
      </Center>
    </Container>
  );
}

export default ForthForm;
