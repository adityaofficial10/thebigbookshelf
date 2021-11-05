const itemModel = require('../models/items');
const dealModel = require('../models/deals');

module.exports = {
    purchaseBook: async function(req, res, next) {
        let itemId = req.body.itemId;
        let item = await itemModel.findById(itemId);
        let qty = req.body.quantity;
        if(qty > item.quantity) {
            res.send('Quantity is more than available no. of items.');
        } else {
            let deal = await dealModel.create({
                quantity: qty,
                buyer: req.userId,
                seller: req.body.sellerId,
                item: itemId,
                sold_at: new Date().toUTCString()
            });
            await itemModel.findByIdAndUpdate(itemId, {
                $set: {quantity : qty} 
            });
            res.json(deal);
        }
    },
    collectFeedback: async function(req, res, next) {
        let itemId = req.body.itemId;
        let buyer = req.userId;
        let seller = req.body.sellerId;

        let feedback = await feedbackModel.create({
            item: itemId,
            buyer: buyer,
            seller: seller,
            content: req.body.content
        });

        res.json(feedback);
    }
}