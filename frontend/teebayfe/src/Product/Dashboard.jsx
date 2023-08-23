import React from 'react';
import { Button, Group, Container, Text, Title } from '@mantine/core';

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
    <div style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Container size="xl" style={{ paddingTop: '60px', flex: 1 }}>
      <Title
        align="center"
        sx={(theme) => ({
          fontFamily: `Greycliff CF, ${theme.fontFamily}`,
          fontWeight: 900,
        })}
      >
        My Products! 
      </Title>
        <Button size="sm" variant="light" style={buttonStyle}>
          Add Product
        </Button>
        <Group style={logoutButtonStyle}>
          <Button size="sm" variant="light">
            LOGOUT
          </Button>
        </Group>
      </Container>
    </div>
  );
}

export default Dashboard;