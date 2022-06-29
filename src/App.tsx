import { useEffect, useState } from 'react';

import { Card } from './components/Card';
import { Chart } from './components/Chart';

import chartsApi, { ChartData } from './services/charts.api';
import { useMockChartData } from './hooks/useMockChartData';

import styles from './App.module.css';

function App() {
  const [data, setData] = useState<ChartData[]>([]);
  const [assetId, setAssetId] = useState<string>();

  const [aprData] = useMockChartData({ initialValues: data });

  useEffect(() => {
    const init = async () => {
      const res = await chartsApi.getTVLData({
        pg: 1,
        tvl_min: 50000,
        sort: 'tvlStaked',
        sort_order: 'desc',
        farms_tvl_staked_gte: 10000000,
      });

      const history = res.data[0].selected_farm[0].tvlStakedHistory;
      const asset = res.data[0].assetId;

      setData(history.reverse());
      setAssetId(asset);
    };
    init();
  }, []);

  return (
    <div className={styles.app}>
      <h1 className={styles.appAsset}>{assetId}</h1>
      <div className={styles.appLayout}>
        <Card>
          <Chart title="Asset APR (y)" data={aprData} />
        </Card>
        <Card>
          <Chart title="Asset TVL" data={data} />
        </Card>
      </div>
    </div>
  );
}

export default App;
