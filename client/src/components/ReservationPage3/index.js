import React, { useState } from 'react';
import Stripe from '../Stripe';

function ReservationPage3() {
  return (
    <div>
      Hey there! It's me, page 3!
      {/* use this page to confirm details and submit*/}
      <Stripe />
    </div>
  )
}

export default ReservationPage3;