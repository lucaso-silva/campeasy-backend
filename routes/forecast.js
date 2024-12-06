const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    try {
        res.json();
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;