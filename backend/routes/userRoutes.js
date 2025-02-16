const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

// Route to add a new user
router.post('/', async (req, res) => {
  const { email, name, checkinList, checkoutList } = req.body; // Get user data from the request body
  try {
    const newUser = await userController.addUser({ email, name, checkinList, checkoutList });
    res.status(201).json(newUser); // Return the created user
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to add an item to the checkin list
router.post('/:userId/checkin', async (req, res) => {
  const { itemId } = req.body; // Get itemId from the request body
  try {
    await userController.addToCheckinList(req.params.userId, itemId);
    res.status(200).json({ message: 'Item added to checkin list' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// Route to add an item to the checkout list
router.post('/:userId/checkout', async (req, res) => {
  const { itemId } = req.body; // Get itemId from the request body
  try {
    await userController.addToCheckoutList(req.params.userId, itemId);
    res.status(200).json({ message: 'Item added to checkout list' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router; 