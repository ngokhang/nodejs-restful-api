const User = require('../models/User');

const getAllUsers = async () => {
    return await User.find({});
};

const getUserByID = async (userId) => {
    return await User.findById(userId).exec();
};

const postUpdateUser = async (email, username, city, userId) => {
    await User.updateOne(
        { _id: userId },
        {
            email: email,
            username: username, 
            city: city
        }
    );
}

module.exports = {
    getAllUsers,
    getUserByID, 
    postUpdateUser
}