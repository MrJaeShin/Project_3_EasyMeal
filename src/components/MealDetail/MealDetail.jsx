import { useEffect, useState } from "react";

export default function MealDetail({ mealDetail }) {
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
    getTotalCalories();
  }, [mealDetail]);
  function getTotalCalories() {
    console.log("inside if");
    if (mealDetail.itemLists) {
      let calories = mealDetail.itemLists.reduce(
        (a, b) => Number(a.itemCalories) + Number(b.itemCalories)
      );
      setTotalCalories(calories);
    }
  }

  return (
    <>
      <h1>Meal Detail</h1>
      <h3>{mealDetail.name}</h3>
      {mealDetail.itemLists && (
        <div>
          {mealDetail.itemLists.map((item) => (
            <div key={item._id}>
              {item.itemName}: {item.itemCalories} cal
            </div>
          ))}
        </div>
      )}
      <div>Total calories: {totalCalories} cal</div>
    </>
  );
}
