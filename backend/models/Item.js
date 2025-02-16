const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema({
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    required: true, // Reference to the user's ID
    ref: 'User',
  },
  status: {
    type: Boolean,
    default: true, // True if first time checked in
  },
  requestedBy: {
    type: mongoose.Schema.Types.ObjectId,
    default: null, // Initially empty
    ref: 'User',
  },
  checkinTime: {
    type: Date,
    default: null, // Timestamp when first checked in
  },
  checkoutTime: {
    type: Date,
    default: null, // Initially empty
  },
  image: {
    type: String, // Link to the image
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
});

// Create the Item model
const Item = mongoose.model('Item', itemSchema);

module.exports = Item;