const express = require('express');
const { getAllUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI } = require('../controllers/APIController');
const routerAPI = express.Router();


routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data: 'Hello World with API'
    });
});

routerAPI.get('/users', getAllUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/user', putUpdateUserAPI);
routerAPI.delete('/user', deleteUserAPI);

module.exports = routerAPI;