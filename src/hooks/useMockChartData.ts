import { useMemo } from 'react';
import { ChartData } from '../services/charts.api';

function getRandomNumberBetween(min: number, max: number) {
  return Math.random() * (max - min + 1) + min;
}

type Params = {
  initialValues: ChartData[];
};

export const useMockChartData = ({ initialValues }: Params) => {
  const chartData = useMemo(() => {
    let initialValue = getRandomNumberBetween(6, 50);
    return initialValues.map(({ date }) => {
      initialValue = initialValue + getRandomNumberBetween(-3, 8);
      return {
        date,
        value: initialValue,
      };
    });
  }, [initialValues]);

  return [chartData];
};
