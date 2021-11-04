const itemModel = require('../models/items');

module.exports = {
    addBook: async function(req, res, next) {
        let type = req.body.type;
        if(type === 'new') {
            let item = await itemModel.create({
                name: req.body.name,
                description : req.body.description,
                quantity: req.body.quantity,
                price : req.body.price,
                seller: req.userId,
                used: req.body.used
            });
            res.json(item);
        } else {
            let itemId = req.body.itemId;
            let deal = await itemModel.findByIdAndUpdate(itemId, {
                '$inc': {
                    quantity: req.body.quantity
                }
            });
            res.json(deal);
        }
    }
};