export default function ListItem({ item, handleAddToMeal }) {
  return (
    <div className="ListItem">
      <div className="name">{item.itemName}</div>
      <div className="buy">
        <span>{item.itemCalories} Cal</span>
        <button
          className="btn-sm"
          onClick={() => handleAddToMeal(item)}
        >
          ADD
        </button>
      </div>
    </div>
  );
}
