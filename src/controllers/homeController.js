const User = require('../models/User');
const { getUserByID } = require('../services/CRUDService');

const getHomepage = async (req, res) => {
    const results = await User.find({});
    return res.render('Homepage.ejs', { listUsers : results});
};

const getCreateUser = (req, res) => {
    return res.render('CreateUsers.ejs');
};

const getUpdateUser = async (req, res) => {
    const userId = req.params.id;
    let userInfo = await User.findById(userId);
    return res.render('UpdateUser.ejs', { userInfo: userInfo });
};

const postCreateUser = async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const city = req.body.city;

    await User.create({
        email, username, city
    })

    return res.redirect('/');
};

const postUpdate = async (req, res) => {
    let email = req.body.email;
    let username = req.body.username;
    let city = req.body.city;
    let userId = (req.body.userId).trim();

    await User.updateOne(
        { _id: userId },
        {
            email: email, 
            username: username, 
            city: city
        }
    )
    return res.redirect('/');
};

const deleteUser = async (req, res) => {
    let userInfo = await getUserByID(req.params.id);
    return res.render('DeletePage.ejs', {userInfo: userInfo});
};

const postDeleteUser = async (req, res) => {
    let userId = req.params.id;
    await User.deleteOne({ _id: userId });
    return res.redirect('/');
}


module.exports = {
    getHomepage,
    getCreateUser,
    postCreateUser,
    getUpdateUser,
    postUpdate,
    deleteUser,
    postDeleteUser
}