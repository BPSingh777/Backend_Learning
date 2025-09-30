const express = require('express');
const router = express.Router();

router.use('/yatri/profile',require('./test'))

module.exports = router;