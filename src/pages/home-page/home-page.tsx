import { Flex, Image, Typography } from 'antd';
import GreetingImage from '../../assets/images/greeting-screen.png';
import { CSSProperties } from 'react';

const SERVICE_PROPS = [
  'индивидуальное психологическое консультирование;',
  'тренинги;',
  'тематические лекции и беседы;',
  'cоциально-психологическое анкетирование, тестирование и опросы.',
];

const styles: { [key in string]: CSSProperties } = {
  greetingBlock: {
    minHeight: 'calc(100vh - 200px)',
  },
  greetingImageWrapper: {
    margin: 'auto',
    maxWidth: '50vw',
    marginTop: 40,
    minWidth: 350,
  },
  greetingTitle: {
    marginBottom: 20,
  },
};

const HomePage = () => {
  return (
    <Flex style={styles.greetingBlock} wrap="wrap">
      <Flex vertical flex={14} justify="space-between" style={{ minWidth: '50%' }}>
        <Flex vertical gap={20}>
          <Typography.Title level={5}>СЛУЖБА ПСИХОЛОГИЧЕСКОЙ ПОМОЩИ</Typography.Title>

          <Typography.Title level={1} style={styles.greetingTitle}>
            <span>
              Профессиональная помощь
              <br />
              студентам и сотрудникам университета
            </span>
          </Typography.Title>

          <div style={styles.greetingTitle}>
            {SERVICE_PROPS.map((item) => (
              <Typography.Paragraph>
                <Flex gap={24}>
                  <span>—</span>
                  {item}
                </Flex>
              </Typography.Paragraph>
            ))}
          </div>
        </Flex>

        <Typography.Paragraph strong>
          Важно! Консультации проходят в очном и онлайн режиме, бесплатны и конфиденциальны.
        </Typography.Paragraph>
      </Flex>
      <Flex vertical flex={10} justify="space-between" style={{ alignSelf: 'end' }}>
        <div style={styles.greetingImageWrapper}>
          <Image src={GreetingImage} preview={false} height={'100%'} />
        </div>
      </Flex>
    </Flex>
  );
};

export default HomePage;
