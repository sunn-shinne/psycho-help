import { Col, Flex, Image, Row, Typography } from 'antd';
import GreetingImage from '../../assets/images/greeting-screen.png';

import { CSSProperties } from 'react';
import { FEATURES_OF_WORK, REASONS_TO_VISIT, SERVICE_PROPS } from './constants';

const styles: { [key in string]: CSSProperties } = {
  block: {
    paddingBlock: 48,
    paddingInline: 24,
  },
  title: {
    textAlign: 'center',
    marginBottom: 24,
  },
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
  featursBlock: {
    paddingTop: 72,
    paddingBottom: 48,
  },
  featureItem: {
    marginBottom: 24,
  },
  featureImage: {
    maxWidth: 40,
    maxHeight: 40,
  },
};

const HomePage = () => {
  return (
    <div>
      <div style={styles.block}>
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
      </div>

      <div style={styles.block}>
        <Typography.Title level={3} style={styles.title}>
          С чем может помочь психолог?
        </Typography.Title>
        <Row>
          {REASONS_TO_VISIT.map((item) => (
            <Col xs={12} xl={8}>
              <Flex vertical align="center">
                <Image src={item.image} preview={false} height={'100%'} />
                <Typography.Text strong style={{ textAlign: 'center' }}>
                  {item.title}
                </Typography.Text>
              </Flex>
            </Col>
          ))}
        </Row>
      </div>

      <div style={styles.block}>
        <Typography.Title level={3} style={styles.title}>
          Особенности работы службы:
        </Typography.Title>
        <Row gutter={64} style={styles.featursBlock}>
          {FEATURES_OF_WORK.map((item) => (
            <Col xs={24} xl={8} style={styles.featureItem}>
              <Flex gap={14}>
                <div style={styles.featureImage}>
                  <Image src={item.image} preview={false} />
                </div>
                <Flex vertical>
                  <Typography.Title level={5} style={{ margin: 0 }}>
                    {item.title}
                  </Typography.Title>
                  <Typography.Text>{item.desc}</Typography.Text>
                </Flex>
              </Flex>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default HomePage;
