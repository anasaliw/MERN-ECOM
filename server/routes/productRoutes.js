const express = require("express");
const {
  getAllProducts,
  createProduct,
} = require("../Controllers/productControllers");
const router = express.Router();

router.route("/createProduct").get(createProduct);
router.route("/getAllProducts").get(getAllProducts);

module.exports = router;
