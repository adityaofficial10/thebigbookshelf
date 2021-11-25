require("dotenv").config({
    path: 'config/.env'
});

const STRIPE_SECRET_KEY = process.env.STRIPE_SECRET_KEY;
const stripe = require('stripe')(STRIPE_SECRET_KEY);

module.exports = {
    handlePayment: async function(data) {
        let quantity = data.quantity;
        let price = Number(data.price);
        let cardToken = data.cardToken;

        await stripe.charges.create({
              amount: price * quantity,
              currency: 'usd',
              source: cardToken.id,
              description: `Payment for ${data.title}`,
              metadta: {
                productId: data.id
              }
        }).catch((err) => {
            console.log("Error processing the payment: ", err);
        });
    }
}