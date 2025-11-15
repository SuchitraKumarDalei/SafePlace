const express = require('express')
const router = express.Router();
const {redg,login} = require('../controller/auth-controller');

router.post('/registration',redg);
router.post('/login',login);

module.exports = router;
