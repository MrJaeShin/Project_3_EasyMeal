import React, { useState, useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem";
import * as itemsAPI from "../../utilities/items-api";

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

  // event handlers
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
      console.log("calling props to handle meal create");
      props.handleCreateMeal(model);
      return { model };
    });
  }

  function handleAddItemToMeal(item) {
    console.log(item);
    setSelectedItem((prevItem) => prevItem.concat(item));
  }

  // function resetAddMeal() {
  //   setFormData({
  //     name: "",
  //     items: [],
  //   });
  // }

  return (
    <main className="ListItem">
      <h1>Create a meal</h1>
      <input
        placeholder="Enter Meal Name"
        type="text"
        name="name"
        value={formData.name}
        onChange={handleChange}
        required
      />
      <aside className="ItemList">
        <h3>List of Items</h3>
        {listItem}
      </aside>
      <aside className="Tray">
      <h3>Tray</h3>
        {selectedItems.map((item, idx) =>(
            <div key={idx}>{item.itemName}</div>
        ))}
        <button className="btn-sm" onClick={handleAddMeal}>
          Add Meal
        </button>
      </aside>
    </main>
  );
}
