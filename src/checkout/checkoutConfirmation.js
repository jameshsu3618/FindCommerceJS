import React, { useState } from "react";
import { Button } from "react-bootstrap";
import "./checkoutConfirmation.scss"

const CheckoutConfirmation = ({handleCompleted}) => {
    return (
        <div class="confirm-container">
        <h2 class="confirm-title">Thank you for your purchase!</h2>
        <div class="line-one">Order confirmation sent to akcange@gmail.com.</div>
        <div class="line-two">Estimated delivery time: 5 to 7 business days</div>  
        <hr class="solid"></hr>
        <div class="create-account-title">Create an account with us for faster checkout.</div>
        <div class="create-account">
          <div class="section"> 
            <label>Create Password</label>
            <input></input>
          </div>
          <div class="section"> 
            <label>Confirm Password</label>
            <input></input>
          </div>
        </div>
        <Button className="create-account-btn" onClick={handleCompleted}>Create Account</Button>
      </div>
    )
}
export default CheckoutConfirmation;