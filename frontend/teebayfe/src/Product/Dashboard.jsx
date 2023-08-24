import React from 'react';
import { Button, Group, Container, Text, Title, Card, ActionIcon } from '@mantine/core';
import { FaTrash } from 'react-icons/fa';
import { NavLink, useNavigate } from 'react-router-dom';

function Dashboard() {
  const navigate = useNavigate();

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

  const cardContainerStyle = {
    display: 'grid',
    gap: '20px',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    width: '90%',
    margin: '20px',
  };

  const products = [
    {
      id: 1,
      title: 'Product 1',
      description: 'This is the first product description.',
      price: 100,
      rent: 23,
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is the second product description.',
      price: 100,
      rent: 23,
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is the third product description.',
      price: 100,
      rent: 23,
    },
  ];

  const handleCardClick = (productId) => {
    // Implement what should happen when a card is clicked, e.g., show a modal or navigate to a different page
    console.log(`Card ${productId} clicked`);
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
        <NavLink to="/rootform">
          <Button size="sm" variant="light" style={buttonStyle}>
            Add Product
          </Button>
        </NavLink>
        <Group style={logoutButtonStyle}>
          <Button size="sm" variant="light">
            LOGOUT
          </Button>
        </Group>
        <div style={{ ...cardContainerStyle, gridTemplateColumns: '1fr' }}>
          {products.map((product) => (
            <Card
              key={product.id}
              shadow="sm"
              padding="lg"
              style={{ cursor: 'pointer', marginBottom: '20px', backgroundColor: '#f0f0f0' }} // Grey background color
              onClick={() => handleCardClick(product.id)}
            >
              <Text size="xl" style={{ marginBottom: '0.5rem' }}>
                    {product.title}
              </Text>
              <Text>{product.description}</Text>
              <Text>{product.price}</Text>
              <Text>{product.rent}</Text>
              <ActionIcon
                position="absolute"
                right="10px"
                top="10px"
                size="md"
                style={{
                backgroundColor: 'transparent',
                border: 'none',
                outline: 'none',
                padding: 0,
                cursor: 'pointer',
                position: 'absolute',
                right: '10px',
                top: '10px',
                }}
                onClick={(e) => {
                  e.stopPropagation(); // Prevent card click event
                  console.log(`Delete ${product.id}`);
                }}
              >
               <FaTrash />
              </ActionIcon>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default Dashboard;
