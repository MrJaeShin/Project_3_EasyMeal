import { useEffect, useState } from "react";
import * as usersService from "../../utilities/users-service";
import * as mealsAPI from "../../utilities/meals-api";
import { set } from "mongoose";

function MealListPage() {
  const [allMeals, setAllMeals] = useState([]);

  useEffect(() => {
    async function getAllMeals() {
      const allMeals = await mealsAPI.getAll();
      setAllMeals(allMeals)
      console.log(setAllMeals);
    }
    getAllMeals();
  }, []);

  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <main className="MealListPage">
      <h1>Meal List</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </main>
  );
}
export default MealListPage;
