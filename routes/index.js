var express = require('express');
var router = express.Router();

const {index} = require('../controllers/indexController');

/* get / */
router.get('/', index);

module.exports = router;
