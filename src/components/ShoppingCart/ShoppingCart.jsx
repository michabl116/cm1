import React, { useState } from "react";

function ShoppingCart() {
  const [items, setItems] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");

  // Handle input change for item name
  function handleItemNameChange(event) {
    setItemName(event.target.value);
  }

  // Handle input change for quantity
  function handleQuantityChange(event) {
    setQuantity(event.target.value);
  }

  // Add a new item to the list
  function addItem() {
    if (itemName.trim() !== "" && quantity.trim() !== "") {
      setItems((i) => [...i, { itemName, quantity }]);
      setItemName("");
      setQuantity(""); // Clear the input fields
    }
  }

  // Delete an item from the list
  function deleteItem(index) {
    const updatedItems = items.filter((_, i) => i !== index);
    setItems(updatedItems);
  }

  return (
    <div className="shopping-cart">
      <h1>Shopping Cart</h1>
      <div>
        <input
          type="text"
          placeholder="Enter item name..."
          value={itemName}
          onChange={handleItemNameChange}
        />
        <input
          type="number"
          placeholder="Enter quantity..."
          value={quantity}
          onChange={handleQuantityChange}
        />
        <button onClick={addItem}>Add Item</button>
      </div>
      <ol>
        {items.map((item, index) => (
          <li key={index}>
            {item.itemName} - {item.quantity}
            <button onClick={() => deleteItem(index)}>Delete</button>
          </li>
        ))}
      </ol>
    </div>
  );
}

export default ShoppingCart;