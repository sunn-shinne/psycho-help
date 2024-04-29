import { Row, Col, Flex, Typography, Image } from 'antd';
import { FEATURES_OF_WORK } from '../constants';
import { CSSProperties } from 'react';

const styles: { [key in string]: CSSProperties } = {
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

const FeaturesBlock = () => {
  return (
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
  );
};

export default FeaturesBlock;
