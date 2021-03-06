import React, { useState, useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem";
import * as itemsAPI from "../../utilities/items-api";
import "./AddMealPage.css";

export default function AddMealPage(props) {
  const [items, setItems] = useState([]);
  const [selectedItems, setSelectedItem] = useState([]);
  const [formData, setFormData] = useState({
    name: "",
    items: [],
  });

  const listItem = items.map((item) => (
    <ListItem
      key={item._id}
      item={item}
      handleAddToMeal={handleAddItemToMeal}
    />
  ));

  useEffect(() => {
    async function getItems() {
      const items = await itemsAPI.getAll();
      setItems(items);
    }
    getItems();
  }, []);

  function handleChange(evt) {
    evt.preventDefault();
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }

  function handleAddMeal() {
    setFormData(() => {
      let model = {
        name: formData.name,
        item: selectedItems,
      };
      props.handleCreateMeal(model);
      return { model };
    });
  }

  function handleAddItemToMeal(item) {
    setSelectedItem((prevItem) => prevItem.concat(item));
  }

  return (
    <>
      <h1>Create a meal</h1>
      <main className="container">
        <aside className="item-a">
          <h3>List of Items</h3>
          {listItem}
        </aside>
        <aside className="item-b">
          <h3>Tray</h3>
          <input
            placeholder="Enter Meal Name"
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <br></br>
          {selectedItems.map((item, idx) => (
            <div key={idx}>{item.itemName}</div>
          ))}
          <button className="btn-sm" onClick={handleAddMeal}>
            Create Meal
          </button>
        </aside>
      </main>
    </>
  );
}
