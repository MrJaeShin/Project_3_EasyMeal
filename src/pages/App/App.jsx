import { useState } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as mealsAPI from "../../utilities/meals-api";
import { Redirect, Route, Switch } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import AddItemPage from "../AddItemPage/AddItemPage";
import AddMealPage from "../AddMealPage/AddMealPage";
import MealListPage from "../MealListPage/MealListPage";
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage"
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());

  async function handleAddItem(item) {
    const itemResponse = await itemsAPI.create(item);
    console.log(itemResponse);
  }

  async function handleCreateMeal(meal) {
    //const mealResponse = await mealsAPI.create(meal);
    console.log(meal);
  }

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Switch>
            <Route path="/item/add">
              <AddItemPage handleAddItem={handleAddItem} />
            </Route>
            <Route path="/item/detail">
              <ItemDetailPage />
            </Route>
            <Route path="/meal/add">
              <AddMealPage handleCreateMeal={handleCreateMeal} />
            </Route>
            <Route path="/meals">
              <MealListPage />
            </Route>
            <Redirect to="/meals" />
          </Switch>
        </>
      ) : (
        <AuthPage setUser={setUser} />
      )}
    </main>
  );
}

export default App;
