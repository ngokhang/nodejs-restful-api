const connection = require('../config/database');

const getAllUsers = async () => {
    let [results, fiedls] = await connection.query(
        'select * from Users'
    );
    return results;
};

const getUserByID = async (userId) => {
    let sqlQueryGetUserById = 'select * from Users where Users.id = ?';
    let [results, fields] = await connection.query(sqlQueryGetUserById, [userId]);
    let user = results && results.length > 0 ? results[0] : {};

    return user;
};

const postUpdateInfouser = async (email, username, city, userId) => {
    let sqlQueryUpdateUser = 'update Users set Users.email = ?, Users.name = ?, Users.city = ? where Users.id = ?';
    connection.query(sqlQueryUpdateUser, [email, username, city, userId]);
}

module.exports = {
    getAllUsers,
    getUserByID, 
    postUpdateInfouser
}