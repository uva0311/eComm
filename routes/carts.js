const express = require('express');
const cartsRepo = require('../repositories/carts');
const productsRepo = require('../repositories/products');
const cartShowTemplate = require('../views/carts/show');

const router = express.Router();

// receive a post request to add an item to a cart
router.post('/cart/products', async (req, res) => {
  // figure out the cart
  let cart;
  if (!req.session.cartId) {
    // create one if there is no cart for that user
    // store the cart id on req.session.cartId prop
    cart = await cartsRepo.create({ items: [] });
    req.session.cartId = cart.id;
  } else {
    // get the cart from the cart repo
    cart = await cartsRepo.getOne(req.session.cartId);
  }

  const existingItem = cart.items.find(item => item.id === req.body.productId);
  if (existingItem) {
    // increase quantity of existing product
    existingItem.quantity++;
  } else {
    // or add new product to cart items array
    cart.items.push({ id: req.body.productId, quantity: 1 });
  }

  await cartsRepo.update(cart.id, {
    items: cart.items
  });

  res.send('product added to cart');
});

// receive a get request to show all items in cart
router.get('/cart', async (req, res) => {
  if (!req.session.cartId) {
    res.redirect('/');
  }

  const cart = await cartsRepo.getOne(req.session.cartId);

  for (let item of cart.items) {
    const product = await productsRepo.getOne(item.id);

    item.product = product;
  }

  res.send(cartShowTemplate({ items: cart.items }));
});
// receive a psot request to delete an item from a cart

module.exports = router;
