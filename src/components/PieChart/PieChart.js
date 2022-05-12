import { useEffect, useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data }) {

  const chartData = {
    labels: [
      'sleep', 'work', 'exercise', 'meditation', 
      'brain downtime', 'screentime', 'socializing', 'time in nature'
    ],
    datasets: [
      {
        label: 'habits',
        data: data,
        backgroundColor: [
         "red", "orange", "yellow", "green", 
         "blue", "violet", "pink", "teal"
        ],
        borderWidth: 1,
      },
    ],
  };
    return (
      data ?   
      <>
        <h5>MOOD: GOOD</h5>
        <h6>FOOD: HEALTHY</h6>
        <div style={{width: 500}}><Pie data={chartData} /></div>
      </>
      :
      <p>loading habit</p>
    );
  }