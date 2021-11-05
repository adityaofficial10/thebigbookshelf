const User = require('../models/users');

module.exports = {
    updation: async function(req, res, next) {
        await User.findByIdAndUpdate(
            req.userId,
            { $set: req.body },
            async (err,results) => {
                if (!err) {
                    var user = await User.findById(req.userId);
                    res.send(user);
                }
                else res.send("Some error");
            }
        ).catch(err => console.log("Query error"));
    }
    
}