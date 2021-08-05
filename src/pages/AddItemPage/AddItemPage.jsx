import React, { useState, useEffect } from "react";

export default function AddItemPage({
  handleAddItem,
  itemDetail,
  handleEditItem,
}) {
  const [itemData, setItemData] = useState({
    itemName: "",
    itemCalories: 0,
    itemCategory: "protein",
  });

  useEffect(() => {
    if (itemDetail) setItemData(itemDetail);
  }, [itemDetail]);

  function handleChange(evt) {
    setItemData({
      ...itemData,
      [evt.target.name]: evt.target.value,
    });
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    itemDetail ? await handleEditItem(itemData) : await handleAddItem(itemData);
    return resetData();
  }

  function resetData() {
    setItemData({
      itemName: "",
      itemCalories: 0,
      itemCategory: "protein",
    });
  }

  return (
    <main className="AddItemPage">
      <h3>Add Item</h3>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>Name</label>
          <input
            type="text"
            name="itemName"
            value={itemData.itemName}
            onChange={handleChange}
            required
          />
          <label>Calories</label>
          <input
            type="number"
            name="itemCalories"
            value={itemData.itemCalories}
            onChange={handleChange}
            required
          />
          <label>Category</label>
          <select
            type="text"
            name="itemCategory"
            onChange={handleChange}
            value={itemData.itemCategory}
          >
            <option value="protein">Protein</option>
            <option value="carb">Carbs</option>
            <option value="veggie/fruit">Veggie/Fruit</option>
          </select>
          {itemDetail ? (
            <button type="submit">Update</button>
          ) : (
            <button type="submit">Add</button>
          )}
        </form>
      </div>
      {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
    </main>
  );
}
