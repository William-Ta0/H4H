const Item = require('../models/Item');

// Function to add a new item
const addItem = async (itemData) => {
  try {
    const newItem = new Item({
      ...itemData,
      checkinTime: new Date(), // Set checkinTime to current timestamp when item is added
    });
    await newItem.save();
    return newItem; // Return the created item
  } catch (error) {
    throw new Error('Error creating item: ' + error.message);
  }
};

// Function to checkout an item
const checkoutItem = async (itemId, userId) => {
  try {
    const item = await Item.findById(itemId); // Use the MongoDB _id
    if (!item) {
      throw new Error('Item not found');
    }
    if (!item.status) {
      throw new Error('Item is not available for checkout'); // Check if status is true
    }
    item.status = false; // Set status to not available
    item.requestedBy = userId; // Set the user who checked out the item
    item.checkoutTime = new Date(); // Set the checkout time to current timestamp
    await item.save(); // Save the updated item
    return item; // Return the updated item
  } catch (error) {
    throw new Error('Error checking out item: ' + error.message);
  }
};

// Function to get available items
const getAvailableItems = async () => {
  try {
    const items = await Item.find({ status: true }); // Query items with status true
    return items.map(item => ({
      _id: item._id, // Include the item ID
      name: item.name,
      image: item.image,
    })); // Return the item ID, name, and image
  } catch (error) {
    throw new Error('Error fetching available items: ' + error.message);
  }
};

module.exports = {
  addItem,
  checkoutItem,
  getAvailableItems, // Export the new function
}; 