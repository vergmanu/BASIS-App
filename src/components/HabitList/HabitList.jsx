import HabitListItem from "../HabitListItem/HabitListItem";
import './HabitList.css'


export default function HabitList({ habits, handleClick }) {
  return (
    <container className="HabitList">
      <h2>LOGGED DAYS</h2>
      <ul>
        {habits.map((habit, idx) => (
          <HabitListItem habit={habit} key={idx} handleClick={handleClick}/>
        ))}
      </ul>
    </container>
  );
}