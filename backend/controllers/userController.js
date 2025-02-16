const User = require('../models/User');

// Function to add a new user
const addUser = async (userData) => {
  try {
    const newUser = new User(userData);
    await newUser.save();
    return newUser; // Return the created user
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

// Function to add an item to the checkinList
const addToCheckinList = async (userId, itemId) => {
  try {
    const user = await User.findById(userId);
    if (!user.checkinList.includes(itemId)) {
      await User.findByIdAndUpdate(
        userId,
        {
          $addToSet: { checkinList: itemId },
          $inc: { checkinCount: 1 } // Increment checkinCount only if item is new
        }
      );
    }
  } catch (error) {
    throw new Error('Error adding to checkin list: ' + error.message);
  }
};

// Function to add an item to the checkoutList
const addToCheckoutList = async (userId, itemId) => {
  try {
    const user = await User.findById(userId);
    if (!user.checkoutList.includes(itemId)) {
      await User.findByIdAndUpdate(
        userId,
        {
          $addToSet: { checkoutList: itemId },
          $inc: { checkoutCount: 1 } // Increment checkoutCount only if item is new
        }
      );
    }
  } catch (error) {
    throw new Error('Error adding to checkout list: ' + error.message);
  }
};

module.exports = {
  addUser,
  addToCheckinList,
  addToCheckoutList,
}; 