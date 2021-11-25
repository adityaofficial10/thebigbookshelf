const itemModel = require('../models/items');
const connectToDatabase = require('../config/database');

module.exports = {
    addBook: async function(event, context, callback) {
        let { type, name, description, quantity, price, used, itemId } = JSON.parse(event.body);
        let userId = event.requestContext.authorizer.principalId;
        await connectToDatabase();
        if(type === 'new') {
            let item = await itemModel.create({
                name: name,
                description : description,
                quantity: quantity,
                price : price,
                seller: userId,
                used: used
            });
            return {
                "statusCode": 200,
                "body": JSON.stringify(item),
                "headers": {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
            };
        } else {
            await itemModel.findByIdAndUpdate(itemId,{ $set: { name: name, quantity: quantity, price: price, description: description} });
            let updatedDeal = await itemModel.findById(itemId);

            return {
                "statusCode": 200,
                "body": JSON.stringify(updatedDeal),
                "headers": {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
            };
        }
    }
};