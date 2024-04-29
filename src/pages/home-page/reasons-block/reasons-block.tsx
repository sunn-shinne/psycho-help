import { Col, Flex, Image, Row, Typography } from 'antd';
import { REASONS_TO_VISIT } from '../constants';

const ReasonsBlock = () => {
  return (
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
  );
};

export default ReasonsBlock;
