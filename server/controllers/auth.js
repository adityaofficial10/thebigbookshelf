const mongoose = require('mongoose');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require('dotenv').config();
const secret = process.env.SECRET;
// const chat_api = require("../Chat_Api/index");

const User = require('../models/users');
const salting_rounds = 10;

exports.register = async (req, res) => {
    // console.log(req.body);
    const { username, password, email,isBuyer } = req.body;
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
    await User.findOne({ username: username }, (err, results) => {
        if (!err) {
            if (results) {
                console.log(results);
                console.log("Im here");
                errorMessages.push("Username already exists");
            }
        }
        else {
            errorMessages.push("Server error");
        }
    }).clone().catch(function(err){ console.log(err)});
    if (errorMessages.length == 0) {
        bcrypt.hash(password, salting_rounds, async (errors, hash) => {
            if (errors) {
                // console.log(errors);
                errorMessages.push("Error in hashing");
                res.send({ username, errorMessages,isBuyer});
            }
            else {
                const newUser = new User({
                    _id: mongoose.Types.ObjectId(),
                    username: username,
                    password: hash,
                    email: email,
                    isBuyer : isBuyer
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
                res.send({ id, username, errorMessages,isBuyer, token });
            }
        });
    }
    else
        res.send({ username, errorMessages, isBuyer});
};

exports.login = async (req, res) => {
    const { username, password } = req.body;
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
    await User.findOne({ 'username': username }, (err, user) => {
        // console.log("Query happened");
        if (!err) {
            // console.log(user);
            //console.log(hash);
            if (user !== null) {
                bcrypt.compare(password, user.password, (errors, result) => {
                    if (errors) {
                        errorMessages.push("Error in hashing");
                        
                        res.send({ username, errorMessages, isBuyer, token });
                    }
                    else {
                        // console.log(result);
                        if (result === true) {
                            chat_password = user.chat_password;
                            token = jwt.sign({ email: user.email, id: user._id }, secret);
                            var id = user.id;
                            isBuyer = user.isBuyer;
                            res.send({ username, errorMessages, isBuyer, token });
                        }
                        else {
                            // console.log("Im here");
                            errorMessages.push("Username and Password do not match");
                            // console.log(errorMessages);
                            res.send({ username, errorMessages, isBuyer, token });
                        }
                    }
                });
            }
            else {
                // console.log("Im here");
                errorMessages.push("Username does not exist");
                // console.log(errorMessages);
                res.send({ username, errorMessages, isBuyer, token });
            }
        }
        else {
            errorMessages.push("Server error");
            res.send({ username, errorMessages, isBuyer, token });
        }

    });
    // console.log("Finished");
    // console.log(errorMessages);
    // res.send({chat_password ,username,errorMessages});
};