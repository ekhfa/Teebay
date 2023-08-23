import React from 'react';
import { Button, Group, Container, Text } from '@mantine/core';

function Dashboard() {
  const buttonStyle = {
    position: 'absolute',
    top: '20px',
    left: '30px',
  };

  const logoutButtonStyle = {
    position: 'absolute',
    top: '20px',
    right: '30px',
  };

  return (
    <div style={{ position: 'relative', minHeight: '100vh' }}>
      <Button size="lg" variant="light" style={buttonStyle}>
        Add Product
      </Button>
      <Group style={logoutButtonStyle}>
        <Button size="lg" variant="light">
          LOGOUT
        </Button>
      </Group>
      <Container size="xl" style={{ paddingTop: '60px' }}>
        <Text align="center" size="xl">
          My Products!
        </Text>
      </Container>
    </div>
  );
}

export default Dashboard;
