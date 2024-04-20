const express = require("express");
const router = express.Router();
const carController = require("../controller/car");
const { authMiddleware } = require("../middleware/auth");

/* Add routes */
router.route("/").get(authMiddleware(["user", "admin"]), carController.getCars).post(authMiddleware(["admin"]), carController.addCar);

router
  .route("/:id")
  .get(authMiddleware(["user", "admin"]), carController.getCar)
  .putauthMiddleware(["admin"]), (carController.updateCar)
  .delete(authMiddleware(["admin"]), carController.deleteCar);

module.exports = router;
