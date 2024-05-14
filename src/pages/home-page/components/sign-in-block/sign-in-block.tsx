import { CSSProperties } from 'react';
import { Button, Col, Flex, Input, Radio, Row, Space } from 'antd';
import Image1 from '../../../../assets/images/main/sign-in/1.png';
import Image2 from '../../../../assets/images/main/sign-in/2.png';
import Image3 from '../../../../assets/images/main/sign-in/3.png';
import Image4 from '../../../../assets/images/main/sign-in/4.png';

const styles: { [key in string]: CSSProperties } = {
  form: {
    borderRadius: 20,
    backgroundColor: '#D9E5FF',
    padding: '40px 30px',
    flex: 1,
  },
  imagesWrapper: {
    height: '100%',
    paddingInline: 10,
  },
  image: {
    maxWidth: '100%',
    height: 'auto',
  },
};

const SignInBlock = () => {
  return (
    <Row>
      <Col span={3}>
        <Flex vertical justify="space-between" style={styles.imagesWrapper}>
          <img style={styles.image} src={Image1} alt="" />
          <img style={styles.image} src={Image2} alt="" />
        </Flex>
      </Col>
      <Col span={18}>
        <SignInForm />
      </Col>
      <Col span={3}>
        <Flex vertical justify="space-between" style={styles.imagesWrapper}>
          <img style={styles.image} src={Image3} alt="" />
          <img style={styles.image} src={Image4} alt="" />
        </Flex>
      </Col>
    </Row>
  );
};

const SignInForm = () => {
  return (
    <div style={styles.form}>
      <Flex vertical gap={16}>
        <Input placeholder="Имя*" />
        <Input placeholder="Почта*" />
        <Input placeholder="Телефон*" />
        <Radio.Group>
          <Space direction="vertical">
            <Radio value={1}>Студент</Radio>
            <Radio value={2}>Преподаватель</Radio>
          </Space>
        </Radio.Group>
        <Input.TextArea rows={3} placeholder="Коротко опишите свою проблему" />

        <div style={{ alignSelf: 'center' }}>
          <Button type="primary">Записаться</Button>
        </div>
      </Flex>
    </div>
  );
};

export default SignInBlock;
