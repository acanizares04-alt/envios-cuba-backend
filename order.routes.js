const express = require('express');
const router = express.Router();
const orderController = require('../controllers/order.controller');
const auth = require('../middleware/auth');

router.post('/', auth, orderController.createOrder);
router.get('/', auth, orderController.listOrders);

module.exports = router;
