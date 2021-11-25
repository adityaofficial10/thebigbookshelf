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
            callback(null, {
                statusCode: 400,
                errors: ["Quantity is more than available no. of items"]
            });
        } else {
            let deal = await dealModel.create({
                quantity: quantity,
                buyer: userId,
                seller: sellerId,
                item: itemId,
                sold_at: new Date().toUTCString()
            });
            await itemModel.findByIdAndUpdate(itemId, {
                $set: {quantity : qty} 
            });
            await handlePayment({
                quantity: quantity,
                price: item.price,
                cardToken: cardToken,
                title: item.name,
                id: itemId
            });
            callback(null, {
                statusCode: 200,
                errors: null,
                body: JSON.stringify(deal)
            });
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
        callback(null, {
            statusCode: 200,
            errors: null,
            body: JSON.stringify(feedback)
        });
    }
}