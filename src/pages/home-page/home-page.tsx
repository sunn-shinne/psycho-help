import { CSSProperties } from 'react';
import { Typography } from 'antd';
import GreetingBlock from './greeting-block/greeting-block';
import ReasonsBlock from './reasons-block/reasons-block';
import FeaturesBlock from './features-block/features-block';
import CanSignInBlock from './can-sign-in-block/can-sign-in-block';
import ChartBlock from './chart-block/chart-block';
import QuestionList from './question-block/question-list';
import Footer from './footer-block/footer-block';
import SignInBlock from './sign-in-block/sign-in-block';

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
  const questions = [
    {
      id: 1,
      ask: 'В каком режиме проходят консультации?',
      answer:
        'Консультации проводятся очно в кабинетах службы и дистанционно с помощью: мобильной связи, мессенджеров, зума, скайпа, электронной почты. Они бесплатны и конфиденциальны.',
    },
    {
      id: 2,
      ask: 'Сколько времени длится консультация?',
      answer: 'Длительность заранее запланированной консультации 50 мин. - 1 час.',
    },
    {
      id: 3,
      ask: 'Как отменить или перенести консультацию?',
      answer:
        'При необходимости переноса или отмены консультации, обучающийся обязан предупредить специалиста службы психологической помощи минимум за 1 сутки до запланированной встречи;',
    },
    {
      id: 4,
      ask: 'Можно ли опоздать на консультацию?',
      answer:
        'Можно, но вы должны заблаговременно предупредить сотрудника СПП об опоздании. Если вы опоздали на консультацию на 15 мин. и не предупредили об этом, консультация отменяется.',
    },
    {
      id: 5,
      ask: 'Можно ли получить консультацию вне очереди?',
      answer:
        'Если Вы находитесь в остром, кризисном состоянии, то возможна внеочередная срочная консультация в день обращения продолжительностью от 15 до 30 минут.',
    },
  ];

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
          Записаться прямо сейчас:
        </Typography.Title>
        <SignInBlock />
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
      <div style={styles.block}>
        <Typography.Title level={3} style={styles.title}>
          Часто задаваемые вопросы:
        </Typography.Title>
        <QuestionList questions={questions} />
      </div>
      <div style={{ ...styles.block, paddingBottom: 0 }}>
        <Footer />
      </div>
    </div>
  );
};

export default HomePage;
