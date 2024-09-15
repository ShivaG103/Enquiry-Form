const express = require('express');
const router = express.Router();

const { postData, get } = require('../controllers/postData')

router.post('/', postData);
router.get('/get', get);

module.exports = router;