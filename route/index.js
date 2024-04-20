const express = require("express");
const router = express.Router();
const carRoute = require("./car");
const carModelRoute = require("./carModel");
const carDetailRoute = require("./carDetail");
const auth = require("./auth")

// /students
router.use("/auth", auth);
router.use("/cars", carRoute);
router.use("/carmodels", carModelRoute);
router.use("/cardetails", carDetailRoute);

module.exports = router;
