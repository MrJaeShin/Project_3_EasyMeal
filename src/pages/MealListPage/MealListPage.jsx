import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as mealsAPI from "../../utilities/meals-api";

function MealListPage({ handleDeleteMeal }) {
  const history = useHistory();

  const [allMeals, setAllMeals] = useState([]);

  useEffect(() => {
    async function getAllMeals() {
      const allMeals = await mealsAPI.getAll();
      setAllMeals(allMeals);
    }
    getAllMeals();
  }, []);

  function goToDetails(meal) {
    history.push({
      pathname: "/meal/detail",
      state: meal,
    });
  }
  return (
    <main className="MealListPage">
      <h1>Meal List</h1>
      {allMeals.map((meal) => (
        <div className="Meal" key={meal._id}>
          {meal.name}
          <button onClick={() => goToDetails(meal)}>Detail</button>
          <button onClick={() => handleDeleteMeal(meal)}>Delete</button>
        </div>
      ))}
    </main>
  );
}
export default MealListPage;
