require('dotenv').config();
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const connectDB = require('./config/database');

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

connectDB();

app.get('/', (req, res) => res.send('Envios a Cuba - API (básica) ✅'));

// Routes
app.use('/api/auth', require('./routes/auth.routes'));
app.use('/api/orders', require('./routes/order.routes'));

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
