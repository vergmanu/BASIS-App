import HabitListItem from "../HabitListItem/HabitListItem";


export default function HabitList({ habits, handleClick }) {
  return (
    <ul>
      {habits.map((habit, idx) => (
        <HabitListItem habit={habit} key={idx} handleClick={handleClick}/>
      ))}
    </ul>
  );
}