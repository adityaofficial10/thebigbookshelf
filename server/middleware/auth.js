const jwt = require("jsonwebtoken");
require('dotenv').config();
const secret = process.env.SECRET;

exports.auth = async (req,res,next) => {
    try 
    {
        const token = req.headers.authorization.split(" ")[1];
        let decodedData;
        if (token) {      
          decodedData = jwt.verify(token,secret);
          req.userId = decodedData?.id;
        } 
        next();
    } 
    catch (error) {
        // console.log("Second")
        console.log(error);
        // var response = {
        //     "statusCode" : 401
        // };
        // res.send(response);
        res.send(error);
        
    }
};
