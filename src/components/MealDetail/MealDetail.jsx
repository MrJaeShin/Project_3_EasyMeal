import { useEffect, useState } from "react";

export default function MealDetail({ mealDetail }) {
  

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
      <div>Total calories {}</div>
    </>
  );
}
