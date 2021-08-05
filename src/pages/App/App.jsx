import { useState } from "react";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import * as itemsAPI from "../../utilities/items-api";
import * as mealsAPI from "../../utilities/meals-api";
import AuthPage from "../AuthPage/AuthPage";
import AddItemPage from "../AddItemPage/AddItemPage";
import AddMealPage from "../AddMealPage/AddMealPage";
import MealListPage from "../MealListPage/MealListPage";
import MealDetailPage from "../MealDetailPage/MealDetailPage";
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  const history = useHistory();

  async function handleAddItem(item) {
    await itemsAPI.create(item);
  }

  async function handleEditItem(item) {
    await itemsAPI.update(item);
    history.push({
      pathname: "/meal/add",
    });
  }

  async function handleDeleteItem(item) {
    await itemsAPI.deleteOne(item._id);
    history.push({
      pathname: "/meal/add",
    });
  }

  async function handleCreateMeal(meal) {
    await mealsAPI.createMeal(meal);
    history.push({
      pathname: "/meal",
    });
  }
  async function handleDeleteMeal(meal) {
    await mealsAPI.deleteOne(meal._id);
    history.push({
      pathname: "/meal",
    });
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
              <ItemDetailPage
                handleEditItem={handleEditItem}
                handleDeleteItem={handleDeleteItem}
              />
            </Route>
            <Route path="/meal/add">
              <AddMealPage handleCreateMeal={handleCreateMeal} />
            </Route>
            <Route path="/meals">
              <MealListPage handleDeleteMeal={handleDeleteMeal} />
            </Route>
            <Route path="/meal/detail">
              <MealDetailPage />
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
