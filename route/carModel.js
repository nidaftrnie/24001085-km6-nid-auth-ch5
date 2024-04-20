const express = require("express");
const router = express.Router();
const carModelController = require("../controller/carModel");
const { authMiddleware } = require("../middleware/auth");

/* Add routes */
router
  .route("/")
  .get(authMiddleware(["user", "admin"]), carModelController.getCarModels)
  .post(authMiddleware(["admin"]), carModelController.addCarModel);

router
  .route("/:id")
  .get(authMiddleware(["user", "admin"]), carModelController.getCarModel)
  .put(authMiddleware(["admin"]), carModelController.updateCarModel)
  .delete(authMiddleware(["admin"]), carModelController.deleteCarModel);

module.exports = router;
