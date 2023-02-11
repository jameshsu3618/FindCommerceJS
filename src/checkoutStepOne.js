import React, { useState } from "react";
import { Button } from "react-bootstrap";
import burberryShirt from "./burberryShirt.png";
import "./checkoutStepOne.scss"

const CheckoutOne = ({handleNextStep, handlePreviousStep}) => {
    return (
        <div class="product-detail">
            <div class="container">
                <div class="find-commerce-title">
                EKD PRINT SUIT
                </div>
                <div class="image-section">
                    <img src={burberryShirt}/>
                </div>
                <div class="details-section">
                    <div class="details-price">$1050</div>
                    <div class="details-merchant"><span>Sold by</span>Burberry</div>
                    <div class="details-sizing"><span class="details-title">Size</span>
                        <span class="sizing-icons">
                            <a href="#">XXS</a>
                            <a href="#">XS</a>
                            <a href="#">S</a>
                            <a href="#">M</a>
                            <a href="#">L</a>
                            <a href="#">XL</a>
                        </span>
                    </div>
                    <div class="details-shipping">Ship to New York from London</div>
                    <div class="buy-btn-div"><Button onClick={handleNextStep}>BUY NOW</Button></div>
                </div>   
            </div>
        </div>
    )
}
export default CheckoutOne;