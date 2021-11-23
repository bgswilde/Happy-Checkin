import React, { useEffect } from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_CONFIG, QUERY_CHECKOUT_SESSION } from "../../utils/queries";
import { useLazyQuery, useQuery } from '@apollo/client';
import './index.css'

/*

 <Stripe product_name={'test'} unit_amount={1000} quantity={1}/>
 
 */

const Stripe = (props) => {
  // stripe public key from graphql
  const { data: configData } = useQuery(QUERY_CONFIG);
  // create checkout session
  const [getCheckout, { data: checkoutData }] = useLazyQuery(
    QUERY_CHECKOUT_SESSION, 
    {
      variables: {
        productName: props.product_name, 
        unitAmount: props.unit_amount, 
        quantity: props.quantity
      }
  });

  // redirect to stripe checkout
  useEffect( () => {
    if (checkoutData && configData) {
      const stripePromise = loadStripe(configData.config.STRIPE_PK);
      stripePromise.then((res) => {
        res.redirectToCheckout({sessionId: checkoutData.checkoutSession.id});
      });
    }
  }, [checkoutData])

  // get checkout session on submission
  function submitCheckout() {
    getCheckout();
  }

  return (
    <button onClick={submitCheckout}>Checkout</button>
  )

};

export default Stripe;