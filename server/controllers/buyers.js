const itemModel = require('../models/items');
const dealModel = require('../models/deals');
const { handlePayment } = require('../controllers/stripe');
const connectToDatabase = require('../config/database');

module.exports = {
    purchaseBook: async function(event, context, callback) {
        let {itemId, quantity, sellerId, cardToken} = JSON.parse(event.body);
        let { principalId: userId } = JSON.parse(event.requestContext.authorizer); 
        await connectToDatabase();
        let item = await itemModel.findById(itemId);
        if(quantity > item.quantity) {
            throw new Error("Quantity is more than available no. of items");
        } else {
            let deal = await dealModel.create({
                quantity: quantity,
                buyer: userId,
                seller: sellerId,
                item: itemId,
                sold_at: new Date().toUTCString()
            });
            await itemModel.findByIdAndUpdate(itemId, {
                $set: { quantity: qty }
            });
            await handlePayment({
                quantity: quantity,
                price: item.price,
                cardToken: cardToken,
                title: item.name,
                id: itemId
            });
            return {
                "statusCode": 200,
                "body": JSON.stringify(deal),
                "headers": {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
            };
        }
    },
    collectFeedback: async function(event, context, callback) {
        let { itemId, seller, content } = JSON.parse(event.body)
        let buyer = event.requestContext.authorizer.principalId; 
        await connectToDatabase();
        let feedback = await feedbackModel.create({
            item: itemId,
            buyer: buyer,
            seller: seller,
            content: content
        });
        return {
            "statusCode": 200,
            "body": JSON.stringify(feedback),
            "headers": {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
        };
    },
    getItems: async function (event, context, callback) {
        let cart = JSON.parse(event.body);
        let cartItems = cart['product_id'];
        var result = [];
        await connectToDatabase();
        for (var i = 0; i < cartItems.length; i++) {
            if (cartItems[i].match(/^[0-9a-fA-F]{24}$/)) {
                // Yes, it's a valid ObjectId, proceed with `findById` call.
                var rest = await itemModel.findById(cartItems[i]);
                if (rest) { result.push(rest); }
              }
            
        }

        console.log(result);
        return {
            "statusCode": 200,
            "body": JSON.stringify(result),
            "headers": {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
        };
    }
};