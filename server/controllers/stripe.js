const stripe = require('stripe')("sk_test_51Js0m8SIbQpOCQtjKNVtmdU9WIjNgeSNSLgvlZ4sJVxC1N4A0YKEMcpzhjyzNTdlgwjtmEfRfT24gIedHYumAyph00fZa1Chja");

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