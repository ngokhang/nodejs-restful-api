const express = require('express');
const router = express.Router(); 
const { getHomePage, postCreateUser, getCreatePage, getUpdateUserPage, getFormUpdate } = require('../controllers/HomepageController');

router.get('/', getHomePage);
router.get('/create', getCreatePage);
router.post('/create-user', postCreateUser);
router.post('/update-user', getUpdateUserPage);
router.get('/edit/:id', getFormUpdate);

module.exports = {
    router
};