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
  coloredIndex?: number;
}

const VerticalBarChart: FC<VerticalBarChartProps> = ({ title, dataset, coloredIndex }) => {
  const data: ChartData<'bar', number[], string> = {
    labels: [''],
    datasets: dataset.map((data, index) => ({
      data: [data],
      backgroundColor: index === coloredIndex ? '#FF3333' : '#779933',
    })),
  };

  return (
    <>
      <h1 className="display-6 text-center">{title}</h1>
      <Bar className="vw-75 vw-xxl-60" data={data} options={options} />
    </>
  );
};

export default VerticalBarChart;
