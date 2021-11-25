const itemModel = require('../models/items');
const connectToDatabase = require('../config/database');

module.exports = {
    findAll: async function(event, context, callback) {
        await connectToDatabase();
        let items = await itemModel.find();
        console.log(items);
        return {
            "statusCode": 200,
            "body": JSON.stringify({items}),
            "headers": {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
        };
    },
    findQuery: async function(event, context, callback) {
        var { name: product_name } = JSON.parse(event.body);
        await connectToDatabase();
        var items = await itemModel.find({name: new RegExp(product_name, 'i')});
        return {
            "statusCode": 200,
            "body": JSON.stringify({items}),
            "headers": {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
        };
    }
}