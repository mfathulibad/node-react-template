const express = require("express");
const router = express.Router();
const barangController = require("../controllers/barangController");

router.post("/insertbarang", barangController.insertBarang);

module.exports = router;