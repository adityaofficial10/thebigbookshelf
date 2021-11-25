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
            callback(null, {
                statusCode: 200,
                errors: null,
                body: JSON.stringify(item)
            });
        } else {
            await itemModel.findByIdAndUpdate(itemId,{ $set: { name: name, quantity: quantity, price: price, description: description} });
            let updatedDeal = await itemModel.findById(itemId);

            callback(null, {
                statusCode: 200,
                errors: null,
                body: JSON.stringify(updatedDeal)
            });
        }
    }
};