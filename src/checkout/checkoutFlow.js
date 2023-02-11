import React, { useState } from "react";
import { Button } from "react-bootstrap";
import burberryShirt from "./burberryShirt.png";
import CheckoutConfirmation from "./checkoutConfirmation";
import CheckoutOne from "./checkoutStepOne";
import CheckoutTwo from "./checkoutStepTwo";

const CheckoutFlow = ({handleCompleted}) => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    address: "",
    paymentMethod: "",
  });

  const handleChange = (event) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleNextStep = () => {
    setStep(step + 1);
  };

  const handlePreviousStep = () => {
    setStep(step - 1);
  };

  return (
    <div>
      {step === 1 && (
        <CheckoutOne handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep}></CheckoutOne>
      )}
      {step === 2 && (
        <CheckoutTwo handleNextStep={handleNextStep} handlePreviousStep={handlePreviousStep}></CheckoutTwo>
      )}
      {step === 3 && (
        <CheckoutConfirmation handleCompleted={handleCompleted}></CheckoutConfirmation>
      )}
    </div>
  )
}
export default CheckoutFlow;