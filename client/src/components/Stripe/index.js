import React, { useEffect } from 'react';
import { Button } from 'react-bootstrap';
import { loadStripe } from '@stripe/stripe-js';
import { QUERY_CONFIG, QUERY_CHECKOUT_SESSION } from "../../utils/queries";
import { useLazyQuery, useQuery } from '@apollo/client';
import './index.css'

/*

 <Stripe product_name={'test'} unit_amount={1000} quantity={1}/>
 
 */

const Stripe = (props) => {
  // stripe public key from graphql
  console.log(props);
  const { data: configData } = useQuery(QUERY_CONFIG);
  
  // create checkout session via graphql
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
    <Button className="submit-btn" type="submit" onClick={submitCheckout}>Looks Good! Take Me To Payment!</Button>
  )

};

export default Stripe;