var express = require('express');
var router = express.Router();
const vnatk = require('vnatk-express-sequelize');

// router.use(require('../middleware/customerTokenChecker'));

const Models = require('../../models');
module.exports = vnatk({ // "/vnatk" will be your base path where the system will hit for its APIs
    Models: Models,
    router: router
});