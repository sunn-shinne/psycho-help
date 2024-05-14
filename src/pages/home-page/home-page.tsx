import { CSSProperties } from 'react';
import { Typography } from 'antd';
import GreetingBlock from './components/greeting-block/greeting-block';
import ReasonsBlock from './components/reasons-block/reasons-block';
import FeaturesBlock from './components/features-block/features-block';
import CanSignInBlock from './components/can-sign-in-block/can-sign-in-block';
import ChartBlock from './components/chart-block/schedule-block';
import QuestionsList from './components/question-block/questions-list';
import SignInBlock from './components/sign-in-block/sign-in-block';
import TherapistsBlock from './components/doctors-block/doctors-block';
import { faq } from './constants';

const styles: { [key in string]: CSSProperties } = {
  block: {
    paddingBlock: 48,
    paddingInline: 24,
  },
  blockBlue: {
    padding: '12px 24px 24px',
    backgroundColor: '#D9E5FF',
  },
  contentWrapper: {
    maxWidth: 1440,
    margin: 'auto',
    width: '100%',
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
        <div style={styles.contentWrapper}>
          <GreetingBlock />
        </div>
      </div>

      <div style={styles.block}>
        <div style={styles.contentWrapper}>
          <Typography.Title level={3} style={styles.title}>
            С чем может помочь психолог?
          </Typography.Title>
          <ReasonsBlock />
        </div>
      </div>

      <div style={styles.blockBlue}>
        <div style={styles.contentWrapper}>
          <Typography.Title level={3} style={styles.title}>
            Психологи службы
          </Typography.Title>
          <TherapistsBlock />
        </div>
      </div>

      <div style={styles.block}>
        <div style={styles.contentWrapper}>
          <Typography.Title level={3} style={styles.title}>
            Особенности работы службы
          </Typography.Title>
          <FeaturesBlock />
        </div>
      </div>

      <div style={styles.block}>
        <div style={styles.contentWrapper}>
          <Typography.Title level={3} style={styles.title}>
            Записаться прямо сейчас
          </Typography.Title>
          <SignInBlock />
        </div>
      </div>

      <div style={styles.block}>
        <div style={styles.contentWrapper}>
          <Typography.Title level={3} style={styles.title}>
            Так же записатья на консультацию можно:
          </Typography.Title>
          <CanSignInBlock />
        </div>
      </div>

      <div style={styles.blockBlue}>
        <div style={styles.contentWrapper}>
          <Typography.Title level={3} style={styles.title}>
            График работы
          </Typography.Title>
          <ChartBlock />
        </div>
      </div>

      <div style={styles.block}>
        <div style={styles.contentWrapper}>
          <Typography.Title level={3} style={styles.title}>
            Часто задаваемые вопросы
          </Typography.Title>
          <QuestionsList questions={faq} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
