const express = require('express');
const router = express.Router(); 
const { getHomepage, getCreateUser, postCreateUser, getUpdateUser, postUpdate, deleteUser, postDeleteUser } = require('../controllers/homeController');

router.get('/', getHomepage);
router.get('/create', getCreateUser);
router.get('/update/:id', getUpdateUser);
router.get('/delete/:id', deleteUser);

router.post('/update-user', postUpdate);
router.post('/create-user', postCreateUser);
router.post('/postDeleteUser/:id', postDeleteUser);

module.exports = {
    router
};