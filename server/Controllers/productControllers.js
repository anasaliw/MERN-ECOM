const Product = require("../Models/ProductModel");

exports.createProduct = async (req, res) => {
  try {
    const response = await Product.create(req.body);
    return res.status(201).json({ success: true, message: response });
  } catch (error) {
    return res.status(400).json({ success: false, message: error });
  }
};

exports.getAllProducts = (req, res) => {
  try {
    return res.status(200).json({ message: "Got All Products" });
  } catch (error) {
    return res.status(400).json({ message: err });
  }
};
