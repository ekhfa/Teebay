import React from 'react';
import { createStyles,Button, Group, Container, Text, Title, Card, rem } from '@mantine/core';
import { NavLink, useNavigate } from 'react-router-dom';

function AllProducts() {
  
  const navigate = useNavigate();

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
      status: 'sold', // Add the status property
    },
    {
      id: 2,
      title: 'Product 2',
      description: 'This is the second product description.',
      price: 100,
      rent: 23,
      status: 'bought', // Add the status property
    },
    {
      id: 3,
      title: 'Product 3',
      description: 'This is the third product description.',
      price: 100,
      rent: 23,
      status: 'rent', 
    },
  ];
  

  const handleCardClick = (productId) => {
    // Implement what should happen when a card is clicked,
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
          All Products!
        </Title>
        <div style={{ ...cardContainerStyle, gridTemplateColumns: '1fr' }}>
          {products.map((product) => (
            <Card
              key={product.id}
              shadow="sm"
              padding="lg"
              style={{ cursor: 'pointer', marginBottom: '20px', backgroundColor: '#f0f0f0', display: 'flex', flexDirection: 'column' }} // Grey background color
              onClick={() => handleCardClick(product.id)}
            >
              {/* Status tag */}
              <div style={{ alignSelf: 'flex-end', marginTop: '0.2 rem', marginRight: '0.5rem' }}>
                {product.status === 'sold' && <span style={{ color: 'red' }}>Sold</span>}
                {product.status === 'bought' && <span style={{ color: 'blue' }}>Bought</span>}
                {product.status === 'rent' && <span style={{ color: 'green' }}>Rent</span>}
              </div>

             
              <div style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                <Text size="xl" style={{ marginBottom: '0.5rem' }}>
                  {product.title}
                </Text>
                <Text>{product.description}</Text>
                <Text>{product.price}</Text>
                <Text>{product.rent}</Text>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllProducts;
