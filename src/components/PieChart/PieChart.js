import { useEffect, useRef } from 'react'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function PieChart({ data, habits}) {
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
         "rgb(128 152 206)", "rgb(244 125 32)", "rgb(168 103 169)", "rgb(134 186 218)", 
         "rgb(85 87 128)", "rgb(242 184 58)", "rgb(248 88 122)", "rgb(124 142 115)"
        ],
        borderWidth: 1,
      },
    ],
  };
    return (
      data ?   
      <>
        <h5>HABIT CHART</h5>
        <div style={{width: 500}}><Pie data={chartData} /></div>

        <h6>hello: {habits[0].mood}</h6>
      </>
      :
      <p>loading habit</p>
    );
  }


//   <Link to=`/habits/${habits._id}>
// Const { id } = useParams()
//import routes 
// Import Routes, Route from ‘react-router-dom’
// path=‘/habits/:habitID