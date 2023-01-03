const User = require('../models/User');

const getAllUsers = async (req, res) => {
    const results = await User.find({});
    console.log(results);
    return res.render('Homepage.ejs', { listUsers : results});
};

const getCreateUser = (req, res) => {
    return res.render('CreateUsers.ejs');
};

const postCreateUser = async (req, res) => {
    const email = req.body.email;
    const username = req.body.username;
    const city = req.body.city;

    await User.create({
        email, username, city
    })

    return res.redirect('/');
}


module.exports = {
    getAllUsers,
    getCreateUser,
    postCreateUser
}