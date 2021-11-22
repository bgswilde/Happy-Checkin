import React, { useState } from 'react';
import {
  useStripe, 
  useElements, 
  PaymentElement, 
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement
} from '@stripe/react-stripe-js';
import './index.css';

const Stripe = () => {
  const stripe = useStripe();
  const elements = useElements(); // set in App.js

  const handleSubmit = async (event) => {
    // We don't want to let default form submission happen here,
    // which would refresh the page.
    event.preventDefault();

    if (!stripe || !elements) {
      // Stripe.js has not yet loaded.
      // Make sure to disable form submission until Stripe.js has loaded.
      return;
    }

    const result = await stripe.confirmPayment({
      elements,
      confirmParams: {
        return_url: "https://my-site.com/order/123/complete",
      },
    });

    if (result.error) {
      // display error
      console.log(result.error.message);
    } else {
      // success + redirect
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <PaymentElement />
      
      <CardNumberElement
        options={{}}
      />
      <CardCvcElement
        options={{}}
      />
      <CardExpiryElement
        options={{}}
      />
      <button>Submit</button>
    </form>
  )
};

export default Stripe;