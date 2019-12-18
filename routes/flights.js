const express = require("express");
const flightsCtrl = require("../controllers/flights");
const router = express.Router();

router.get("/", flightsCtrl.index);
router.get("/new", flightsCtrl.new);
router.post("/", flightsCtrl.create);
router.get("/:id", flightsCtrl.show);

module.exports = router;
