import { useHistory } from "react-router-dom";

export default function ListItem({ item, handleAddToMeal }) {
    const history = useHistory();

    function showDetail(){
        history.push({
            pathname: '/item/detail',
            state: item
        })
    }

    return (
    <div className="ListItem">
      <span className="name">{item.itemName}</span>
      <button className="btn-sm" onClick={() => handleAddToMeal(item)}>
        Add to Tray
      </button>
      <button className="btn-sm" onClick={() => showDetail(item)}>
        Details
      </button>
    </div>
  );
}
