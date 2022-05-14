import { useState, useEffect } from 'react';
import * as habitsAPI from '../../utilities/habits-api';
import HabitList from '../../components/HabitList/HabitList'
import PieChart from '../../components/PieChart/PieChart'
import './DetailPage.css'


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
      <h1>HABIT SUMMARY</h1>
      <container className="DetailPage">
      {habits ? <div><HabitList habits={habits} handleClick={handleClick}/></div> : <p>LOADING HABITS</p> }
      {data ? <div><PieChart data={data} habits={habits}/></div> : <p>CLICK ON A DATE</p> }
      </container>
    </>
    );
}

