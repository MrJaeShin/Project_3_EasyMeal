import { useEffect, useState } from "react";

export default function MealDetail({ mealDetail }) {
  const [totalCalories, setTotalCalories] = useState(0);

  useEffect(() => {
      console.log(mealDetail.itemLists)
      if (mealDetail.itemLists) {
        console.log('totalCal')
        let totalCal = 10;
        for (let i = 0; i < mealDetail.itemLists.length; i++) {
          totalCal += parseInt(mealDetail.itemLists[i].itemCalories);
        }
        setTotalCalories(totalCal);
      }
   // }
    //getTotalCalories();
  }, [mealDetail]);

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
      <br></br>
      <div><strong>Total calories:</strong> {totalCalories} cal</div>
    </>
  );
}
