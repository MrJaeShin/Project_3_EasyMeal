import { useState } from "react";
import * as itemsAPI from "../../utilities/items-api";
import * as mealsAPI from "../../utilities/meals-api";
import { Redirect, Route, Switch, useHistory } from "react-router-dom";
import { getUser } from "../../utilities/users-service";
import AuthPage from "../AuthPage/AuthPage";
import AddItemPage from "../AddItemPage/AddItemPage";
import AddMealPage from "../AddMealPage/AddMealPage";
import MealListPage from "../MealListPage/MealListPage";
import ItemDetailPage from "../ItemDetailPage/ItemDetailPage";
import NavBar from "../../components/NavBar/NavBar";
import "./App.css";

function App() {
  const [user, setUser] = useState(getUser());
  const [updatedItem, setUpdatedItem] = useState(null);
  const history = useHistory();

  async function handleAddItem(item) {
    const itemResponse = await itemsAPI.create(item);
  }

  async function handleEditItem(item) {
    const detailResponse = await itemsAPI.update(item);
    const itemDetailResponse = await itemsAPI.getById(item._id);
    setUpdatedItem(itemDetailResponse);
  }

  async function handleCreateMeal(meal) {
    //const mealResponse = await mealsAPI.create(meal);
    console.log(meal);
    history.push({
      pathname: "/meal",
    });
  }

  async function handleDeleteItem(item) {
    const itemResponse = await itemsAPI.deleteOne(item._id);
    history.push({
      pathname: "/meal/add",
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
                updatedItem={updatedItem}
                handleEditItem={handleEditItem}
                handleDeleteItem={handleDeleteItem}
              />
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
