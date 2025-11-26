const mongoose = require('mongoose');

const OrderSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
  descripcion: { type: String },
  destino: { type: String },
  estado: { type: String, default: 'pendiente' }
}, { timestamps: true });

module.exports = mongoose.model('Order', OrderSchema);
