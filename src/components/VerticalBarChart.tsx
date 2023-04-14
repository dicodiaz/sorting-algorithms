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
  primaryIndex?: number;
  secondaryIndex?: number;
}

const VerticalBarChart: FC<VerticalBarChartProps> = ({
  title,
  dataset,
  primaryIndex,
  secondaryIndex,
}) => {
  const data: ChartData<'bar', number[], string> = {
    labels: [''],
    datasets: dataset.map((data, index) => ({
      data: [data],
      backgroundColor:
        index === primaryIndex ? '#FF3333' : index === secondaryIndex ? '#0092CC' : '#779933',
    })),
  };

  return (
    <>
      <h1 className="display-6 text-center">{title}</h1>
      <Bar data={data} options={options} />
    </>
  );
};

export default VerticalBarChart;
