import * as usersService from "../../utilities/users-service";

function MealListPage() {
  async function handleCheckToken() {
    const expDate = await usersService.checkToken();
    console.log(expDate);
  }

  return (
    <>
      <h1>MealListPage</h1>
      <button onClick={handleCheckToken}>Check When My Login Expires</button>
    </>
  );
}
export default MealListPage;
