const User = require('../models/users');
const connectToDatabase = require('../config/database');

module.exports = {
    updation: async function (event, context, callback) {
        let userId = event.requestContext.authorizer.principalId;
        let data = JSON.parse(event.body);
        await connectToDatabase();
        await User.findByIdAndUpdate(userId, { $set: data }).catch(err => {
            console.log("Query error");
            return {
                "statusCode": 200,
                "headers": {
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Credentials': true,
                },
            };
        });
        var user = await User.findById(userId);
        return {
            "statusCode": 200,
            "body": JSON.stringify(user),
            "headers": {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Credentials': true,
            },
        };
    }
}