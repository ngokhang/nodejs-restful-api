const connection = require('../config/database');

const getHomePage = (req, res) => {
    // let users = [];
    // // res.send('Hello World');
    // connection.query(
    //     'select * from `Users`',
    //     function(err, results, fields) {
    //         users = results;
    //         res.send(JSON.stringify(users));
    //     }
    // );
    res.render('Homepage.ejs');
};

module.exports = {
    getHomePage
}