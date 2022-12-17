const express = require('express');
const router = express.Router(); 
const { getHomePage } = require('../controllers/HomepageController');

router.get('/', getHomePage);

module.exports = {
    router
};