const express = require('express');
const router = express.Router(); 
const { getHelloWorld } = require('../controllers/HelloWorldController');

router.get('/', getHelloWorld);

module.exports = {
    router
};