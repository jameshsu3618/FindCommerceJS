import React, { useState } from "react";
import { Button } from "react-bootstrap";
import burberryShirt from "./burberryShirt.png";
import "./checkoutStepTwo.scss"

const CheckoutTwo = ({handleNextStep, handlePreviousStep}) => {
    return (
        <div>
        <form class="checkout-form" onsubmit="return validateForm()" >
        <h3 class="form-header">Contact Information</h3>
        
        <label class="form-label" for="name">Name</label>
        <input class="form-input" type="text" id="name" name="name" required/>
        
        <label class="form-label" for="email">Email</label>
        <input class="form-input" type="email" id="email" name="email" required/>
        
        <h3 class="form-header">Shipping Address</h3>
        
        <label class="form-label" for="address1">Address 1</label>
        <input class="form-input" type="text" id="address1" name="address1" required/>
        
        <label class="form-label" for="address2">Address 2</label>
        <input class="form-input" type="text" id="address2" name="address2"/>
        
        <label class="form-label" for="city">City</label>
        <input class="form-input" type="text" id="city" name="city" required/>
        
        <label class="form-label" for="state">State</label>
        <input class="form-input" type="text" id="state" name="state" required/>
        
        <label class="form-label" for="zip">Zip Code</label>
        <input class="form-input" type="text" id="zip" name="zip" required/>
        
        <h3 class="form-header">Payment Method</h3>
        
        <label class="form-label" for="creditcard-number">Credit Card Number</label>
        <input class="form-input" type="text" id="creditcard-number" name="creditcard-number"/>
        
        <label class="form-label" for="expiration-date">Expiration Date</label>
        <input class="form-input" type="text" id="expiration-date" name="expiration-date"/>
        
        <label class="form-label" for="cvv">CVV</label>
        <input class="form-input" type="text" id="cvv" name="cvv"/>
        
        <button class="form-submit" type="submit" value="Submit" onClick={handleNextStep}><span>Pay Now</span></button>
      </form>
      </div>
    )
}
export default CheckoutTwo;