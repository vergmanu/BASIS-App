import './HabitListItem.css'

export default function HabitListItem({ habit, handleClick }) {
    const months = [
        'January', 'February', 'March',
        'April', 'May', 'June', 
        'July', 'August', 'September',
        'October', 'November', 'December'
    ]
    const date = new Date(habit.createdAt)

    return (

        <container className="HabitListItem">
        <h4 className="Dates" onClick={() => handleClick(habit)}>{months[date.getMonth()].toUpperCase()} {date.getDate()} {date.getFullYear()}</h4>
        <p>MOOD: {habit.mood}</p>
        <hr></hr>
        </container>

    );
  }