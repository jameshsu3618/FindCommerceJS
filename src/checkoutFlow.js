import React, { useState } from "react";
import { Button } from "react-bootstrap";

const CheckoutFlow = () => {
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
        <div>
          <h2>Step 1: Personal Information</h2>
          <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      )}
      {step === 2 && (
        <div>
          <h2>Step 2: Shipping Address</h2>
          <div>
            <label htmlFor="address">Address:</label>
            <input
              type="text"
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
            />
          </div>
          <Button onClick={handlePreviousStep}>Back</Button>
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      )}
      {step === 3 && (
        <div>
          <h2>Step 3: Payment Method</h2>
          <div>
            <label htmlFor="paymentMethod">Payment Method:</label>
            <select
              id="paymentMethod"
              name="paymentMethod"
              value={formData.paymentMethod}
              onChange={handleChange}
            >
              <option value="">Select a payment method</option>
              <option value="creditCard">Credit Card</option>
              <option value="debitCard">Debit Card</option>
              <option value="paypal">Paypal</option>
            </select>
          </div>
          <Button onClick={handlePreviousStep}>Back</Button>
          <Button onClick={handleNextStep}>Next</Button>
        </div>
      )}
    </div>
  )
}
export default CheckoutFlow;