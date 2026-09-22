const express = require("express");
const router = express.Router();
const { sendCareersMail } = require("../controllers/careersController");

router.post("/", sendCareersMail);

module.exports = router;
