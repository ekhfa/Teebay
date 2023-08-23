import React, { useState } from 'react';
import { Select, Center, Container, Group, Button } from '@mantine/core';

function SecondForm() {
  const [selectedCategories, setSelectedCategories] = useState([]);

  const handleSelectChange = (value) => {
    setSelectedCategories(value);
    //console.log(value)
  };

  return (
    <Container size="xl" style={{ minHeight: '100vh' }}>
      <Center>
        <div style={{ width: '100%', maxWidth: 450 }}>
          <Select
            style={{ width: '100%', marginTop: '8rem' }}
            label="Select Categories"
            placeholder="Select"
            data={['ELECTRONICS', 'FURNITURE', 'HOME APPLIANCES', 'SPORTING GOODS', 'OUTDOOR']}
            transitionProps={{ transition: 'pop-top-left', duration: 80, timingFunction: 'ease' }}
            value={selectedCategories}
            onChange={handleSelectChange}
            multiple
            required
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

export default SecondForm;
