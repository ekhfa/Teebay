import React, { useState } from 'react';
import { Box, Button, Title, Container} from '@mantine/core';
import FirstForm from './FirstForm';
import SecondForm from './SecondForm';
import ThirdForm from './ThirdForm';
import ForthForm from './ForthForm';
import FifthForm from './FifthForm';

function RootForm() {
      const [step, setStep] = useState(0);
      const [formData, setFormData] = useState({
        productTitle: '',
        productCategories: [],
        productDescription: '',
        productPrice: '',
        productRent: '',
        productDays: '',
        });
      
      const handleNext = () => {
        console.log("handleNext called");
        setStep(step + 1);
      };
    
      const handleBack = () => {
        console.log("handleBack called");
        setStep(step - 1);
      };

      const handleSubmit = () => {
        // Handle form submission
        console.log(formData);
      };
    
      const handleFormChange = (newData) => {
        setFormData({ ...formData, ...newData });
      };

  const renderStep = () => {
    console.log("Rendering step:", step);
    switch (step) {
      case 0:
        return <FirstForm formData={formData} onChange={handleFormChange} handleNext={handleNext} />;
      case 1:
        return <SecondForm formData={formData} onChange={handleFormChange} handleNext={handleNext} handleBack={handleBack}/>;
      case 2:
        return <ThirdForm formData={formData} onChange={handleFormChange} handleNext={handleNext} handleBack={handleBack}/>;
      case 3:
        return <ForthForm formData={formData} onChange={handleFormChange} handleNext={handleNext} handleBack={handleBack}/>;
      case 4:
        return <FifthForm formData={formData} onBack={handleBack} onSubmit={handleSubmit}/>;
      default:
        return null;
    }
};

return (
    <Container size="md">
      {renderStep()}
    </Container>
  );
}

export default RootForm;
