import { Row, Col, Flex, Typography, Image } from 'antd';
import { FEATURES_OF_WORK } from '../../constants';
import styled from 'styled-components';

const FeatursBlock = styled(Row)`
  padding-top: 24px;
`;

const FeatureItem = styled(Col)`
  margin-bottom: 24px;
`;

const FeatureImage = styled.div`
  max-width: 40px;
  max-height: 40px;
`;

const Title = styled(Typography.Title)`
  margin: 0;
`;

const FeaturesBlock = () => {
  return (
    <FeatursBlock gutter={64}>
      {FEATURES_OF_WORK.map((item) => (
        <FeatureItem xs={24} xl={12}>
          <Flex gap={16}>
            <FeatureImage>
              <Image src={item.image} preview={false} alt="Иллюстрация особенностей службы" />
            </FeatureImage>
            <Flex vertical>
              <Title level={3} style={{ fontSize: '20px' }}>
                {item.title}
              </Title>
              <Typography.Text>{item.desc}</Typography.Text>
            </Flex>
          </Flex>
        </FeatureItem>
      ))}
    </FeatursBlock>
  );
};

export default FeaturesBlock;
