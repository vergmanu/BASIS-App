import { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import * as habitsAPI from '../../utilities/habits-api';


export default function HabitForm() {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    mood: 'Neutral',
    food: 4,
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
    <form onSubmit={handleSubmit}> 
      <label>How is your mood?</label>
        <select name="mood" value={formData.mood} onChange={handleChange}>
          <option value={'Great'}>Great</option>
          <option value={'Good'}>Good</option>
          <option value={'Neutral'}>Neutral</option>
          <option value={'Meh'}>Not So Great</option>
          <option value={'Bad'}>Bad</option>
        </select>

      <label>How healthy did you eat?</label>
        <select name="food" value={formData.food} onChange={handleChange}>
          <option value={5}>Very Healthy</option>
          <option value={4}>Healthy</option>
          <option value={3}>Ok</option>
          <option value={2}>Not So Healthy</option>
          <option value={1}>Not Healthy At All</option>
        </select>

      <label>How many hours of sleep did you get?</label>
        <select name="sleep" value={formData.sleep} onChange={handleChange}>
          <option value={1}>1 hr</option>
          <option value={2}>2 hrs</option>
          <option value={3}>3 hrs</option>
          <option value={4}>4 hrs</option>
          <option value={5}>5 hrs</option>
          <option value={6}>6 hrs</option>
          <option value={7}>7 hrs</option>
          <option value={8}>8 hrs</option>
          <option value={9}>9+ hrs</option>
        </select>

      <label>How many hours did you work or focus on a task?</label>
        <select name="work" value={formData.work} onChange={handleChange}>
          <option value={1}>1 hr</option>
          <option value={2}>2 hrs</option>
          <option value={3}>3 hrs</option>
          <option value={4}>4 hrs</option>
          <option value={5}>5 hrs</option>
          <option value={6}>6 hrs</option>
          <option value={7}>7 hrs</option>
          <option value={8}>8 hrs</option>
          <option value={9}>9+ hrs</option>
        </select>

      <label>How many hours did you exercise?</label>
        <select name="exercise" value={formData.exercise} onChange={handleChange}>
          <option value={0}>0</option>
          <option value={.25}>.25 hr</option>
          <option value={.5}>.5 hr</option>
          <option value={1}>1 hr</option>
          <option value={2}>2+ hrs</option>
        </select>


      <label>How much time did you dedicate to mindfulness?</label>
        <select name="meditation" value={formData.meditation} onChange={handleChange}>
          <option value={0}>0</option>
          <option value={.25}>.25 hr</option>
          <option value={.5}>.5 hr</option>
          <option value={1}>1 hr</option>
          <option value={2}>2+ hrs</option>
        </select>

      <label>How much time did you dedicate to free-thinking?</label>
        <select name="bdTime" value={formData.bdTime} onChange={handleChange}>
         <option value={0}>0</option>
          <option value={.25}>.25 hr</option>
          <option value={.5}>.5 hr</option>
          <option value={1}>1 hr</option>
          <option value={2}>2+ hrs</option>
        </select>

      <label>What was your screen-time?</label>
        <select name="screenTime" value={formData.screenTime} onChange={handleChange}>
          <option value={1}>1 hr or less</option>
          <option value={2}>2 hrs</option>
          <option value={3}>3 hrs</option>
          <option value={4}>4 hrs</option>
          <option value={5}>5 hrs</option>
        </select>

      <label>How many hours of face-to-face social interaction did you get?</label>
        <select name="socialTime" value={formData.socialTime} onChange={handleChange}>
          <option value={0}>0</option>
          <option value={.25}>.25 hr</option>
          <option value={.5}>.5 hr</option>
          <option value={1}>1 hr</option>
          <option value={2}>2+ hrs</option>
        </select>

      <label>How much time did you spend in nature/gardening/etc?</label>
        <select name="natureTime" value={formData.natureTime} onChange={handleChange}>
          <option value={0}>0</option>
          <option value={.25}>.25 hr</option>
          <option value={.5}>.5 hr</option>
          <option value={1}>1 hr</option>
          <option value={2}>2+ hrs</option>
        </select>

      <button type="submit">SUBMIT</button>
    </form>
  );
}
