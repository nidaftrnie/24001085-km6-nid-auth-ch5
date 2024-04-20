const express = require("express");
const router = express.Router();
const carDetailController = require("../controller/carDetail");
const { authMiddleware } = require("../middleware/auth");

/* Add routes */
router
  .route("/")
  .get(authMiddleware(["user", "admin"]), carDetailController.getCarDetails)
  .post(authMiddleware(["admin"]), carDetailController.addCarDetail);

router
  .route("/:id")
  .get(authMiddleware(["user", "admin"]), carDetailController.getCarDetail)
  .put(authMiddleware(["admin"]), carDetailController.updateCarDetail)
  .delete(authMiddleware(["admin"]), carDetailController.deleteCarDetail);

module.exports = router;
