import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import AddItemPage from "../AddItemPage/AddItemPage";

export default function ItemDetail({
  handleDeleteItem,
  handleEditItem,
  updatedItem,
}) {
  const location = useLocation();
  const [itemDetail, setItemDetail] = useState({});
  const [shouldUpdate, setShouldUpdate] = useState(false);

  useEffect(() => {
    setItemDetail(location.state);
  }, [location]);

  useEffect(() => {
    if (updatedItem) {
      setItemDetail(updatedItem);
      toggleUpdateForm();
    }
  }, [updatedItem]);

  function toggleUpdateForm() {
    setShouldUpdate(!shouldUpdate);
  }

  return (
    <main className="ItemDetail">
      <h1>Item Details</h1>
      <div>Item Name: {itemDetail.itemName}</div>
      <div>Calories: {itemDetail.itemCalories}</div>
      <div>Category: {itemDetail.itemCategory}</div>
      <button onClick={toggleUpdateForm}>Update</button>
      <button onClick={() => handleDeleteItem(itemDetail)}>Delete</button>
      <hr></hr>
      {shouldUpdate && (
        <AddItemPage itemDetail={itemDetail} handleEditItem={handleEditItem} />
      )}
    </main>
  );
}
