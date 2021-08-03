import { useState, useEffect, useRef } from "react";

export default function AddItemPage(props) {
  const [itemData, setItemData] = useState({
    itemName: "",
    itemCalories: 0,
    itemCategory: 'protein',
  });

  function handleChange(evt) {
    setItemData({
      ...itemData,
      [evt.target.name]: evt.target.value,
    });
  }
 
  async function handleSubmit(evt) {
    evt.preventDefault();
    props.handleAddItem(itemData);
  }

  return (
    <main className="AddItemPage">
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
          <button type="submit">Add</button>
        </form>
      </div>
      {/* <p className="error-message">&nbsp;{this.state.error}</p> */}
    </main>
  );
}
