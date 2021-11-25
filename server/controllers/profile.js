const User = require('../models/users');
const connectToDatabase = require('../config/database');

module.exports = {
    updation: async function (event, context, callback) {
        let userId = event.requestContext.authorizer.principalId;
        let data = JSON.parse(event.body);
        await connectToDatabase();
        await User.findByIdAndUpdate(userId, { $set: data }).catch(err => {
            console.log("Query error");
            callback(null, {
                statusCode: 400,
                errors: null,
            });
        });
        var user = await User.findById(userId);
        callback(null, {
            statusCode: 200,
            errors: null,
            body: JSON.stringify(user)
        });
    }
}