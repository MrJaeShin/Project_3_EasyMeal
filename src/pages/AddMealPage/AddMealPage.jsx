import { useState, useEffect } from "react";
import ListItem from "../../components/ListItem/ListItem";
import * as itemsAPI from "../../utilities/items-api";
import * as mealsAPI from "../../utilities/meals-api";

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
    console.log(evt);
    setFormData({
      ...formData,
      [evt.target.name]: evt.target.value,
    });
  }
  function handleAddMeal() {
    setFormData({
      ...formData,
      items: selectedItems,
    });
    console.log(selectedItems, formData);
    props.handleCreateMeal(formData);
    console.log("we are going to add the meal");
  }

  function handleAddItemToMeal(item) {
    setSelectedItem([...selectedItems, item]);
  }

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
      <h3>list of items</h3>
      {listItem}
      <button className="btn-sm" onClick={() => handleAddMeal}>
        ADD
      </button>
    </main>
  );
}
