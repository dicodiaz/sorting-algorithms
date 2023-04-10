import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  ChartData,
  ChartOptions,
  LinearScale,
  Tooltip,
} from 'chart.js';
import { FC } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip);

const options: ChartOptions<'bar'> = {
  responsive: true,
  scales: {
    y: {
      display: false,
    },
  },
  animation: false,
};

interface VerticalBarChartProps {
  title: string;
  dataset: number[];
}

const VerticalBarChart: FC<VerticalBarChartProps> = ({ title, dataset }) => {
  const data: ChartData<'bar', number[], string> = {
    labels: dataset.map(() => ''),
    datasets: [
      {
        data: dataset,
        backgroundColor: '#779933',
      },
    ],
  };

  return (
    <>
      <h1 className="display-6 text-center">{title}</h1>
      <Bar className="vw-75" data={data} options={options} />
    </>
  );
};

export default VerticalBarChart;
