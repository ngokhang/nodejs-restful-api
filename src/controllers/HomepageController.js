const connection = require('../config/database');
const { getAllUsers, getUserByID, postUpdateInfouser } = require('../services/CRUDService');

const getHomePage = async (req, res) => {
    let results = await getAllUsers();
    return res.render('Homepage.ejs', { listUsers: results });
};

const postCreateUser = async (req, res) => {
    let { email, username, city } = req.body;
    let sqlQueryAddUser = `INSERT INTO Users(email, name, city) VALUES(?, ?, ?)`;
    let [results, fields] = await connection.query(sqlQueryAddUser, [email, username, city]);
    console.log(results);
    res.send('Created Successfully');
}

const getCreatePage = (req, res) => {
    res.render('CreateUsers.ejs');
}

const getUpdateUserPage = async (req, res) => {
    // get new info from user input
    let {email, username, city, userId} = req.body;
    await postUpdateInfouser(email, username, city, userId);
    // return res.send('Update Successfully!');
    res.redirect('/');
}

const getFormUpdate = async (req, res) => {
    const userId = req.params.id;
    let user = await getUserByID(userId);

    return res.render('UpdateUser.ejs', {userInfo : user});
}

module.exports = {
    getHomePage,
    postCreateUser,
    getCreatePage,
    getUpdateUserPage,
    getFormUpdate,
    postUpdateInfouser
}