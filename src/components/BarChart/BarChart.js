import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);

export default function BarChart({ moreData }) {
  const chartData = {
    labels: [
      'MOOD', 'FOOD'
    ],
    datasets: [
      {
        label: 'mood and food',
        data: moreData,
        backgroundColor: [
         "rgb(128 152 206)", "rgb(128 152 206)"
        ],
        borderWidth: 1,
      },
    ],
  };
    return (
      moreData ?   
      <>
        <h2>MOOD CHART</h2>
        <div style={{width: 500}}><Bar data={chartData} /></div>
      </>
      :
      <p>loading habit</p>
    );
  }