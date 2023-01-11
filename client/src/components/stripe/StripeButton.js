import React from 'react';
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";


const StripeCheckoutButton = ({price}) => {
    const StripePrice = price * 100;
    const PublishableKey = "pk_test_N5lhtYeoEgfo2FgjefRDSokr002u11l1XM";

    const token = token => {
        axios({
            url: "payment",
            method: "post",
            data:{
                amount: StripePrice,
                token
            }
        }).then(response => {
            alert("payment Successful")
        }).catch( error => {
            console.log("payment error: " , JSON.parse(error));
            alert("there was an issue with your payment. please ensure you use the provided credit card info")
        })
    }

    return ( 
        <StripeCheckout 
            label="Pay Now"
            name="Chimoney Assessment"
            billingAddress
            shippingAddress
            image="https://svgshare.com/i/CUz.svg"
            description={`your total is $${price}`}
            amount={StripePrice}
            panelLabel="Pay Now"
            token={token}
            stripeKey={PublishableKey}
        />
     );
}
 
export default StripeCheckoutButton;