import { useState, useEffect } from 'react';
import * as habitsAPI from '../../utilities/habits-api';
import HabitList from '../../components/HabitList/HabitList'
import PieChart from '../../components/PieChart/PieChart'


export default function DetailPage() {
    const [habits, setHabits] = useState ([]);
    const [data, setData] = useState (null);

    useEffect(function () {
        async function getHabits() {
          const habitData = await habitsAPI.getHabits();
          setHabits(habitData);
        }
        getHabits(); 
      }, [])

     function handleClick(habit) {
       setData([
        habit.sleep, 
        habit.work, 
        habit.exercise, 
        habit.meditation, 
        habit.bdTime, 
        habit.screenTime, 
        habit.socialTime, 
        habit.natureTime, 
       ])
     }
      
    return (
    <>
      <h1>DetailPage</h1>
      {habits ? <HabitList habits={habits} handleClick={handleClick}/> : <p>Loading Habits </p> }
      {data ? <PieChart data={data}/> : <p> select date from above </p> }
    

    </>
    );
}

