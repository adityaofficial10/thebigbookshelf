const mongoose = require('mongoose');
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const secret = process.env.SECRET;
// const chat_api = require("../Chat_Api/index");

const User = require('../models/users');
const connectToDatabase = require('../config/database');
const salting_rounds = 10;

exports.register = async (event, context, callback) => {
    // console.log(req.body);
    const { username, password, email, isBuyer } = JSON.parse(event.body);
    // console.log(req.body);
    // console.log(username);
    var token = "";
    // console.log(req.body.password);
    // console.log(req.body.chat_password);
    var errorMessages = [];
    if (username.length === 0) {
        errorMessages.push("No username given");
    }
    if (password.length === 0) {
        errorMessages.push("No password given");
    }
    // if (chat_password.length === 0) {
    //     errorMessages.push("No chat password given");
    // }
    if (email.length === 0) {
        errorMessages.push("No email given");
    }
    await connectToDatabase();
    let results = await User.findOne({ username: username }).catch((err) => errorMessages.push("Server error"));
    if (results) {
        console.log(results);
        console.log("Im here");
        errorMessages.push("Username already exists");
    }
    if (errorMessages.length == 0) {
        let hash = await bcrypt.hash(password, salting_rounds).catch((err) => {
            errorMessages.push("Error in hashing");
            callback(null, {
                statusCode: 400,
                errors: errorMessages,
                body: JSON.stringify({ username, isBuyer })
            });
        });
        const newUser = new User({
            _id: mongoose.Types.ObjectId(),
            username: username,
            password: hash,
            email: email,
            isBuyer: isBuyer
        });
        await newUser.save().then(results => console.log(results)).catch(err => console.log(err));
        token = jwt.sign({ email: email, id: newUser._id }, secret);
        // console.log(newUser._id);
        // const chat_user = {
        //     "username" : newUser.username,
        //     "secret" : newUser.chat_password,
        //     "first_name" : newUser.username,
        //     "last_name" : "user1"
        // };
        // const chatresponse = await chat_api.create_chat_user(chat_user);
        var id = newUser._id;
        callback(null, {
            statusCode: 200,
            errors: errorMessages,
            body: JSON.stringify({ id, username, isBuyer, token })
        });
    } else {
        callback(null, {
            statusCode: 400,
            errors: errorMessages,
            body: JSON.stringify({ username })
        });
    }
};

exports.login = async (event, context, callback) => {
    const { username, password } = JSON.parse(event.body);
    // console.log(req.body);
    // console.log(username);
    var token = "";
    var isBuyer = false;
    // var chat_password = "";
    // console.log(req.body.password);
    // console.log(req.body.chat_password);
    var errorMessages = [];
    if (username.length === 0) {
        errorMessages.push("No username given");
    }
    if (password.length === 0) {
        errorMessages.push("No password given");
    }
    await connectToDatabase();
    let user = await User.findOne({ 'username': username }).catch((err) => {
        errorMessages.push("Server error");
        callback(null, {
            statusCode: 500,
            errors: errorMessages,
            body: JSON.stringify({ username, isBuyer, token })
        });
    });
    if (user !== null) {
        let result = await bcrypt.compare(password, user.password).catch((errors) => {
            errorMessages.push("Error in hashing");
            callback(null, {
                statusCode: 500,
                errors: errorMessages,
                body: JSON.stringify({ username, isBuyer, token })
            });
        });
        if (result === true) {
            chat_password = user.chat_password;
            token = jwt.sign({ email: user.email, id: user._id }, secret);
            isBuyer = user.isBuyer;
            callback(null, {
                statusCode: 200,
                errors: errorMessages,
                body: JSON.stringify({ username, isBuyer, token })
            });
        }
        else {
            // console.log("Im here");
            errorMessages.push("Username and Password do not match");
            callback(null, {
                statusCode: 400,
                errors: errorMessages,
                body: JSON.stringify({ username, isBuyer, token })
            });
        }
    }
    else {
        // console.log("Im here");
        errorMessages.push("Username does not exist");
        callback(null, {
            statusCode: 400,
            errors: errorMessages,
            body: JSON.stringify({ username, isBuyer, token })
        });
    }
};