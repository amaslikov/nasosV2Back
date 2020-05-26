const express = require("express");
const router = express.Router();

// @route   GET /
// @desc    Products page
// @access  Public
router.get("/", (req, res) => {
  const timeout = req.query.t || 1;

  setTimeout(() => {
    res.send("Hello 16.52 " + JSON.stringify(req.query));
  }, timeout);
});

module.exports = router;
