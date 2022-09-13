import products from "../model/products.js";

export const createproducts = async (req, res) => {
  try {
    // const result = await products.create(req.body);
    console.log(req.body);
    // res.json({
    //   message: "Products Added",
    //   result,
    // });
  } catch (error) {
    res.json({ message: error.message });
  }
};
