const express = require('express');
const router = express.Router(); 
const { getAllUsers, getCreateUser, postCreateUser } = require('../controllers/homeController');

router.get('/', getAllUsers);
router.get('/create', getCreateUser);
router.post('/create-user', postCreateUser);

module.exports = {
    router
};