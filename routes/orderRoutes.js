const express = require('express');
const Order = require('../models/Order');
const User = require('../models/User');
const Product = require('../models/Product');

const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const orders = await Order.find().populate('user').populate('products');
    res.send(orders);
  } catch (error) {
    res.status(500).send('Server error');
  }
});

router.post('/', async (req, res) => {
  try {
    const { userId, productIds } = req.body;
    const user = await User.findById(userId);
    const products = await Product.find({ _id: { $in: productIds } });
    const order = new Order({ user, products });
    await order.save();
    res.status(201).send('Order placed successfully');
  } catch (error) {
    res.status(500).send('Server error');
  }
});

module.exports = router;
