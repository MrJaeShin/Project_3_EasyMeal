import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import * as mealsAPI from "../../utilities/meals-api";
import "./MealListPage.css";

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
    <>
      <h1>Meal List</h1>
      <main className="container">
        <article className="item-c">
        {allMeals.map((meal) => (
          <div className="meal" key={meal._id}>
            {meal.name}
            <button onClick={() => goToDetails(meal)}>Detail</button>
            <button onClick={() => handleDeleteMeal(meal)}>Delete</button>
          </div>
        ))}
        </article>
      </main>
    </>
  );
}
export default MealListPage;
