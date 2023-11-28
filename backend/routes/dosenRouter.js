const express = require("express");
const router = express.Router();
const dosenController = require("../controllers/dosenController");

router.get("/dosen", dosenController.getAllDosen);

module.exports = router;