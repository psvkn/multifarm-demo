import { useEffect, useRef, useState } from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid } from 'recharts';
import { dateFormatter, numberFormatter } from '../../utils/format.helper';

import styles from './Chart.module.css';

type ChartProps<T> = {
  title: string;
  data: T[];
};

function tickFormatter<T extends unknown>(formatterFunc: (value: T) => string) {
  return (value: T) => formatterFunc(value);
}

export const Chart = <T extends any>({ title, data }: ChartProps<T>) => {
  const [width, setWidth] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!ref.current) {
      return;
    }

    const resizeObs = new ResizeObserver(([entry]) => {
      setWidth(entry.contentRect.width - 10);
    });

    resizeObs.observe(ref.current);

    return () => {
      resizeObs.disconnect();
    };
  }, []);

  return (
    <div className={styles.chart} ref={ref}>
      <h2 className={styles.chartTitle}>{title}</h2>
      <AreaChart
        width={width}
        height={250}
        data={data}
        margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
      >
        <defs>
          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#A455D3" stopOpacity={0.3} />
            <stop offset="95%" stopColor="#2E75D9" stopOpacity={0.5} />
          </linearGradient>
        </defs>
        <XAxis
          style={{ fontSize: 12, fill: '#ACB2E6' }}
          dataKey="date"
          tickFormatter={tickFormatter(dateFormatter)}
          tickCount={1}
        />
        <YAxis
          style={{ fontSize: 12, fill: '#ACB2E6' }}
          dataKey="value"
          tickFormatter={tickFormatter(numberFormatter)}
        />
        <CartesianGrid stroke="#3E426A" />
        <Area
          type="monotone"
          dataKey="value"
          stroke="#A455D3"
          fillOpacity={1}
          strokeWidth={2}
          fill="url(#colorPv)"
        />
      </AreaChart>
    </div>
  );
};
