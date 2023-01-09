const express = require("express");
const router = express.Router();

router.get("/", (req, res, next) => {
  res.send("Message from the back");
});

module.exports = router;
