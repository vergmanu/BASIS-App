import { Link } from 'react-router-dom';
// Using the import below, we can call any exported function using: userService.someMethod()
import * as userService from '../../utilities/users-service';
import './NavBar.css'


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
      <span>BASIS</span>
      <Link to="/habits">LOGGED HABITS</Link>
      &nbsp; | &nbsp;
      <Link to="/habits/new">LOG TODAY'S HABITS</Link>
      &nbsp; | &nbsp;
      <span>Welcome, {user.name}</span>
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}
