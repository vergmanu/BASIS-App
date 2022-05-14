import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as habitsAPI from '../../utilities/habits-api';
import './HabitForm.css'


export default function HabitForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    mood: 'NEUTRAL',
    food: 'OK',
    sleep: 8,
    work: 7,
    exercise: .5, 
    meditation: .5, 
    bdTime: 1,
    screenTime: 4,
    socialTime: 2,
    natureTime: 1,
  });


/*--- Event Handlers ---*/

  function handleChange(evt) {
    const newFormData = {
      ...formData,
      [evt.target.name]: evt.target.value
    };
    setFormData(newFormData);
  }

  async function handleSubmit(evt) {
    evt.preventDefault();
    await habitsAPI.create(formData);
    navigate('/habits');
  }
 
  return (
    <>
    <h1>LOG YOUR HABITS</h1>
    <div className="container"> 
    <br /><br />
    <form className="HabitForm" onSubmit={handleSubmit}> 
      <label>HOW'S YOUR MOOD TODAY?</label>
        <select name="mood" value={formData.mood} onChange={handleChange}>
          <option value={'GREAT'}>GREAT</option>
          <option value={'GOOD'}>GOOD</option>
          <option value={'NEUTRAL'}>NEUTRAL</option>
          <option value={'NOT SO GREAT'}>NOT SO GREAT</option>
          <option value={'BAD'}>BAD</option>
        </select>

      <label>HOW WELL DID YOU EAT TODAY?</label>
        <select name="food" value={formData.food} onChange={handleChange}>
          <option value={'VERY HEALTHY'}>VERY HEALTHY</option>
          <option value={'HEALTHY'}>HEALTHY</option>
          <option value={'OK'}>OK</option>
          <option value={'NOT SO HEALTHY'}>NOT SO HEALTHY</option>
          <option value={'NOT HEALTHY AT ALL'}>NOT HEALTHY AT ALL</option>
        </select>

      <label>HOW MUCH SLEEP DID YOU GET?</label>
        <select name="sleep" value={formData.sleep} onChange={handleChange}>
          <option value={1}>1 HOUR</option>
          <option value={2}>2 HOURS</option>
          <option value={3}>3 HOURS</option>
          <option value={4}>4 HOURS</option>
          <option value={5}>5 HOURS</option>
          <option value={6}>6 HOURS</option>
          <option value={7}>7 HOURS</option>
          <option value={8}>8 HOURS</option>
          <option value={9}>9+ HOURS</option>
        </select>

      <label>HOW MANY HOURS DID YOU WORK/FOCUS ON A TASK?</label>
        <select name="work" value={formData.work} onChange={handleChange}>
          <option value={1}>1 HOUR</option>
          <option value={2}>2 HOURS</option>
          <option value={3}>3 HOURS</option>
          <option value={4}>4 HOURS</option>
          <option value={5}>5 HOURS</option>
          <option value={6}>6 HOURS</option>
          <option value={7}>7 HOURS</option>
          <option value={8}>8 HOURS</option>
          <option value={9}>9+ HOURS</option>
        </select>

      <label>HOW MUCH EXERCISE DID YOU GET?</label>
        <select name="exercise" value={formData.exercise} onChange={handleChange}>
          <option value={0}>0</option>
          <option value={.25}>.25 HOUR</option>
          <option value={.5}>.5 HOUR</option>
          <option value={1}>1 HOUR</option>
          <option value={2}>2+ HOURS</option>
        </select>


      <label>HOW MUCH TIME DID YOU DEDICATE TO MINDFULNESS?</label>
        <select name="meditation" value={formData.meditation} onChange={handleChange}>
          <option value={0}>NONE</option>
          <option value={.25}>.25 HOUR</option>
          <option value={.5}>.5 HOUR</option>
          <option value={1}>1 HOUR</option>
          <option value={2}>2+ HOURS</option>
        </select>

      <label>FREE-THINKING: HOW LONG DID YOU ALLOW YOUR MIND TO WANDER?</label>
        <select name="bdTime" value={formData.bdTime} onChange={handleChange}>
         <option value={0}>NONE</option>
          <option value={.25}>.25 HOUR</option>
          <option value={.5}>.5 HOUR</option>
          <option value={1}>1 HOUR</option>
          <option value={2}>2+ HOURS</option>
        </select>

      <label>HOW MANY HOURS OF SCREEN-TIME?</label>
        <select name="screenTime" value={formData.screenTime} onChange={handleChange}>
          <option value={1}>1 HOUR OR LESS</option>
          <option value={2}>2 HOURS</option>
          <option value={3}>3 HOURS</option>
          <option value={4}>4 HOURS</option>
          <option value={5}>5 HOURS</option>
        </select>

      <label>HOW MUCH SOCIAL INTERACTION DID YOU GET?</label>
        <select name="socialTime" value={formData.socialTime} onChange={handleChange}>
          <option value={0}>NONE</option>
          <option value={.25}>.25 HOUR</option>
          <option value={.5}>.5 HOUR</option>
          <option value={1}>1 HOUR</option>
          <option value={2}>2+ HOURS</option>
        </select>

      <label>HOW MUCH TIME DID YOU SPEND IN NATURE?</label>
        <select name="natureTime" value={formData.natureTime} onChange={handleChange}>
          <option value={0}>NONE</option>
          <option value={.25}>.25 HOUR</option>
          <option value={.5}>.5 HOUR</option>
          <option value={1}>1 HOUR</option>
          <option value={2}>2+ HOURS</option>
        </select>

      <button type="submit">SUBMIT</button>
    </form>
    </div>
    </>
  );
}
