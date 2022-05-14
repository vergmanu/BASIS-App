import HabitListItem from "../HabitListItem/HabitListItem";


export default function HabitList({ habits, handleClick }) {
  return (
    <>
    <h5>PICK A DATE</h5>
    <ul>
      {habits.map((habit, idx) => (
        <HabitListItem habit={habit} key={idx} handleClick={handleClick}/>
      ))}
    </ul>
    </>
  );
}