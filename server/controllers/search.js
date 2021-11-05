const itemModel = require('../models/items');

module.exports = {
    findAll: async function(req, res, next) {
        var items = await itemModel.find();
        console.log(items);
        res.send(items);
    },
    findQuery: async function(req, res, next) {
        var product_name = req.params.name;
        var items = await itemModel.find({name: new RegExp(product_name, 'i')});
        res.send(items);
    }
}