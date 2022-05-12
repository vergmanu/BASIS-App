export default function HabitListItem({ habit, handleClick }) {
    const months = [
        'January', 'February', 'March',
        'April', 'May', 'June', 
        'July', 'August', 'September',
        'October', 'November', 'December'
    ]
    const date = new Date(habit.createdAt)

    return (
        <h4 onClick={() => handleClick(habit)}>DATE: {months[date.getMonth()]} {date.getDate()} {date.getFullYear()}</h4>
    );
  }