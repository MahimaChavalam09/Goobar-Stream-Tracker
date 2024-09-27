const express = require('express');
const router = express.Router();
const Stream = require('../models/Stream');

// Sample route to get streams
router.get('/', async (req, res) => {
  try {
    const streams = await Stream.find();
    res.json(streams);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

