import { Link } from 'react-router-dom';
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';


export default function NavBar({ user, setUser }) {
  // Add the following function
  function handleLogOut() {
    // Delegate to the users-service
    userService.logOut(setUser());
    // Update state will also cause a re-render
    setUser(null);
  }
  return (
    <nav>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="/habits">My Habits</Link>
      &nbsp; | &nbsp;
      <Link to="/habits/new">Log Habits</Link>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
