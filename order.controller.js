const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  try {
    const { descripcion, destino } = req.body;
    const order = await Order.create({ user: req.userId, descripcion, destino });
    res.json(order);
  } catch (err) {
    res.status(500).json({ error: 'Error creando orden' });
  }
};

exports.listOrders = async (req, res) => {
  try {
    const orders = await Order.find({ user: req.userId }).sort('-createdAt');
    res.json(orders);
  } catch (err) {
    res.status(500).json({ error: 'Error listando ordenes' });
  }
};
