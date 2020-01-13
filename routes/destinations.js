const express = require("express");
const destinationCtrl = require("../controllers/destinations");
const router = express.Router();

router.post("/flights/:id/destinations", destinationCtrl.create);

module.exports = router;
