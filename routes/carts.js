const express = require('express');

const router = express.Router();

// receive a post request to add an item to a cart
router.post('/cart/products', (req, res) => {
  // req.body.productId
  res.send('product added to cart');
});
// receive a get request to show all items in cart

// receive a psot request to delete an item from a cart

module.exports = router;
