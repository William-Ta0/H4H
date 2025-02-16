const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const itemRoutes = require('./routes/itemRoutes');

dotenv.config();
const PORT = process.env.PORT || 5001;
const MONGO_URL = process.env.MONGO_URL;
const app = express();

app.use(cors());
app.use(express.json()); 


app.get('/', (req, res) => {
  res.send('Hello from the server! This is the root route.');
});

app.use('/api/users', userRoutes);
app.use('/api/items', itemRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
}).on('error', (err) => {
  if (err.code === 'EADDRINUSE') {
    console.error(`Port ${PORT} is already in use. Please try another port.`);
  } else {
    console.error('Server error:', err);
  }
  process.exit(1);
});

mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log(`Connected to MongoDB database: ${mongoose.connection.db.databaseName}`);
}).catch((err) => {
    console.error('MongoDB Connection Error Details:');
    console.error('Error name:', err.name);
    console.error('Error message:', err.message);
    console.error('Error code:', err.code);
    process.exit(1);
});

module.exports = app;
