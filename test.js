const express = require('express');
const router = express.Router();

// stud/:username GET
router.get('/stud/:username', (req, res) => {
    const { username } = req.params;
    if (username === 'Daniel') {
        res.send('Student name is Daniel');
    } else {
        res.send('Student name is not Daniel');
    }
});

// prof/:username POST
router.post('/prof/:username', (req, res) => {
    const { username } = req.params;
    res.send(`welcome to this page - ${username}`);
});

// emp POST
router.post('/emp', (req, res) => {
    res.send('Hey you are new here');
});

module.exports = router;