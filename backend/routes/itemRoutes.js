const express = require('express');
const router = express.Router();
const itemController = require('../controllers/itemController');

// Route to add a new item
router.post('/', async (req, res) => {
  const itemData = req.body; // Get item data from the request body
  try {
    const newItem = await itemController.addItem(itemData);
    res.status(201).json(newItem); // Return the created item
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to checkout an item
router.post('/checkout/:itemId', async (req, res) => {
  const userId = req.body.userId; // Get userId from the request body
  try {
    const updatedItem = await itemController.checkoutItem(req.params.itemId, userId);
    res.status(200).json(updatedItem); // Return the updated item
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to get available items
router.get('/available', async (req, res) => {
  try {
    const availableItems = await itemController.getAvailableItems();
    res.status(200).json(availableItems); // Return the available items
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 