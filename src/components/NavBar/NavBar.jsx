import { Link } from "react-router-dom";
import * as usersService from "../../utilities/users-service";

function NavBar({ user, setUser }) {
  function handleLogOut() {
    usersService.logOut();
    setUser(null);
  }

  return (
    <nav>
      <Link to="/meal">Meals</Link>
      &nbsp; | &nbsp;
      <Link to="/meal/add">Add Meal</Link>
      &nbsp; | &nbsp;
      <Link to="/item/add">Add Item</Link>
      &nbsp; | &nbsp;
      <span>
        <b>Welcome, {user.name}</b>
      </span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>
        Log Out
      </Link>
    </nav>
  );
}

export default NavBar;
