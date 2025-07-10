//yarn add react-chartjs-2 chart.js 실행
import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Tooltip,
  Legend
);

const LineChart = ({labels, dataPoints, color = "${({ theme }) => theme.colors.grayMain};" }) => {
  const data = {
    labels,
    datasets: [
      {
        label: '',
        data: dataPoints,
        borderColor: color,
        backgroundColor: `${color}33`, // 투명도 추가
        tension: 0.3,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { display: false },
      tooltip: { enabled: true },
    },
    scales: {
      x: { type: 'category' },
      y: { beginAtZero: true },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
