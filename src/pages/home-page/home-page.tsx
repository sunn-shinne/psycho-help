import { CSSProperties } from 'react';
import { Typography } from 'antd';
import GreetingBlock from './greeting-block/greeting-block';
import ReasonsBlock from './reasons-block/reasons-block';
import FeaturesBlock from './features-block/features-block';
import CanSignInBlock from './can-sign-in-block/can-sign-in-block';
import ChartBlock from './chart-block/chart-block';

const styles: { [key in string]: CSSProperties } = {
  block: {
    paddingBlock: 48,
    paddingInline: 24,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
};

const HomePage = () => {
  return (
    <div>
      <div style={styles.block}>
        <GreetingBlock />
      </div>

      <div style={styles.block}>
        <Typography.Title level={3} style={styles.title}>
          С чем может помочь психолог?
        </Typography.Title>
        <ReasonsBlock />
      </div>

      <div style={styles.block}>
        <Typography.Title level={3} style={styles.title}>
          Особенности работы службы:
        </Typography.Title>
        <FeaturesBlock />
      </div>
			<div style={styles.block}>
        <Typography.Title level={3} style={styles.title}>
          Так же записатья на консультацию можно:
        </Typography.Title>
        <CanSignInBlock />
      </div>
			<div style={styles.block}>
        <Typography.Title level={3} style={styles.title}>
          График работы:
        </Typography.Title>
        <ChartBlock />
      </div>
    </div>
  );
};

export default HomePage;
