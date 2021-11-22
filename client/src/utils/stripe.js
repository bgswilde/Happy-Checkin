require('dotenv').config()
const stripe = require('stripe')(`${process.env.STRIPE_SK}`);


const createCheckoutSession = async (productName, unitAmount, quantity, successUrl, cancelUrl) => {
    const session = await stripe.checkout.sessions.create({
        line_items: [
            {
            price_data: {
                currency: 'usd',
                product_data: {
                    name: `${productName}`,
                },
                unit_amount: unitAmount,
            },
            quantity: quantity,
            },
        ],
        mode: 'payment',
        success_url: `${successUrl}`,
        cancel_url: `${cancelUrl}`,
    });

    console.log('createCheckoutSession', session);
    return session;
}


module.exports = {
    createCheckoutSession
};