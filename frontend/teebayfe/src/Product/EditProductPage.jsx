import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Card, Text, Button } from "@mantine/core";

function EditProductPage() {
  const { id } = useParams(); // Get the product ID from the URL
  const [product, setProduct] = useState(null);

  //   useEffect(() => {
  //     const fetchedProduct = products.find((item) => item.id === parseInt(id));
  //     setProduct(fetchedProduct);
  //   }, [id]);

  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //   };

  //   if (!product) {
  //     return <div>Loading...</div>;
  //   }

  return (
    <p>Edit Page </p>
    // <Container>
    //   <Card>
    //     <form onSubmit={handleSubmit}>
    //       {/* Editable form fields */}
    //       {/* You can use input fields to update the product properties */}
    //       <Text>Edit Product Information</Text>
    //       {/* ... (input fields for title, description, price, rent, etc.) */}
    //       <Button type="submit">Save Changes</Button>
    //     </form>
    //   </Card>
    // </Container>
  );
}

export default EditProductPage;
