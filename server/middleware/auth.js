require('dotenv').config({
    path: "config/.env"
});

const jwt = require("jsonwebtoken");
require('dotenv').config();
const secret = process.env.SECRET;

function generateAuthResponse(principalId, effect, methodArn) {
    const policyDocument = generatePolicyDocument(effect, methodArn);

    return {
        principalId,
        policyDocument
    };
}

function generatePolicyDocument(effect, methodArn) {
    if (!effect || !methodArn) return null;

    const policyDocument = {
        Version: "2012-10-17",
        Statement: [
            {
                Action: "execute-api:Invoke",
                Effect: effect,
                Resource: methodArn
            }
        ]
    };

    return policyDocument;
}


exports.auth = async (event, context, callback) => {
    try {
        const token = event.authorizationToken.replace("Bearer ", "");
        const methodArn = event.methodArn;
        let decoded;
        if (token) {
            decoded = await jwt.verify(token, secret);
            if (decoded && decoded.id) {
                return callback(null, generateAuthResponse(decoded.id, "Allow", methodArn));
            } else {
                return callback(null, generateAuthResponse(decoded.id, "Deny", methodArn));
            }
        } else {
            return callback(null, "Unauthorized");
        }
    }
    catch (error) {
        console.log(error);
        return callback(null, "Unauthorized");
    }
};
