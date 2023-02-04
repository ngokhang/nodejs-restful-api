const User = require("../models/User");
const path = require('path');
const { uploadSingleFile, uploadMutipleFile } = require('../services/fileService');

const getAllUsersAPI = async (req, res) => {
    return res.status(200).json({
        errorCode: 0,
        data: await User.find({})
    });
};

const postCreateUserAPI = async (req, res) => {
    let { email, username, city } = req.body;
    let newUser = await User.create({ email, username, city });
    return res.status(201).json({
        errorCode: 0,
        data: newUser
    });
};

const putUpdateUserAPI = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let city = req.body.city;
    let userId = (req.body.userId).trim();

    let user = await User.updateOne(
        { _id: userId },
        {
            email: email,
            username: username,
            city: city
        }
    );


    return res.status(200).json({
        EC: 0,
        data: user
    })
};

const deleteUserAPI = async (req, res) => {
    let userId = req.body.userId;
    let result = await User.deleteOne({ _id: userId });
    return res.status(200).json({
        EC: 0,
        data: result
    })
};

const postUploadSingleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    }

    fileObject = req.files.image;
    let result = await uploadSingleFile(fileObject);

    return res.status(200).json(result);
};

const postUploadMutipleFile = async (req, res) => {
    if (!req.files || Object.keys(req.files).length === 0) {
        return res.status(400).send('No files were uploaded.');
    };

    fileObjectArray = req.files.image;
    let result = await uploadMutipleFile(fileObjectArray);

    return res.status(200).json(result);
}

module.exports = {
    getAllUsersAPI,
    postCreateUserAPI,
    putUpdateUserAPI,
    deleteUserAPI,
    postUploadSingleFile,
    postUploadMutipleFile,
};