const express = require('express');
const { getAllUsersAPI, postCreateUserAPI, putUpdateUserAPI, deleteUserAPI, postUploadSingleFile, postUploadMutipleFile } = require('../controllers/APIController');
const { postCreateCustomer, postCreateArrayCustomer, getAllCustomers, putUpdateCustomerById, deleteCustomerById, deleteCustomers } = require('../controllers/customerController');
const routerAPI = express.Router();


routerAPI.get('/', (req, res) => {
    res.status(200).json({
        data: 'Hello World with API'
    });
});

//API for User 
routerAPI.get('/users', getAllUsersAPI);
routerAPI.post('/users', postCreateUserAPI);
routerAPI.put('/user', putUpdateUserAPI);
routerAPI.delete('/user', deleteUserAPI);

// API for upload file
routerAPI.post('/file', postUploadSingleFile);
routerAPI.post('/files', postUploadMutipleFile);

// API for Customer
routerAPI.post('/customers', postCreateCustomer);
routerAPI.post('/customers-many', postCreateArrayCustomer);
routerAPI.get('/customers', getAllCustomers);
routerAPI.put('/customer', putUpdateCustomerById);
routerAPI.delete('/customer', deleteCustomerById);
routerAPI.delete('/customers', deleteCustomers);

// API for Query String
routerAPI.get('/info', (req, res) => {
    return res.status(200).json({
        data: req.query,
    })
})


module.exports = routerAPI;