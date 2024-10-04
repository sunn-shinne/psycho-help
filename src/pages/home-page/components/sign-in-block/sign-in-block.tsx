import { Button, Col, Flex, Input, Radio, Row, Space } from 'antd';
import Image1 from '../../../../assets/images/main/sign-in/1.png';
import Image2 from '../../../../assets/images/main/sign-in/2.png';
import Image3 from '../../../../assets/images/main/sign-in/3.png';
import Image4 from '../../../../assets/images/main/sign-in/4.png';
import styled from 'styled-components';

const Form = styled.div`
  border-radius: 20px;
  background-color: #d9e5ff;
  padding: 40px 30px;
  flex: 1;
`;

const ImagesWrapper = styled(Flex)`
  height: 100%;
  padding-inline: 10px;
`;

const Image = styled.img`
  max-width: 100%;
  height: auto;
`;

const SignInBlock = () => {
  return (
    <Row>
      <Col span={3}>
        <ImagesWrapper vertical justify="space-between">
          <Image src={Image1} alt="Иллюстрация рядом с формой" />
          <Image src={Image2} alt="Иллюстрация рядом с формой" />
        </ImagesWrapper>
      </Col>
      <Col span={18}>
        <SignInForm />
      </Col>
      <Col span={3}>
        <ImagesWrapper vertical justify="space-between">
          <Image src={Image3} alt="Иллюстрация рядом с формой" />
          <Image src={Image4} alt="Иллюстрация рядом с формой" />
        </ImagesWrapper>
      </Col>
    </Row>
  );
};

const SignInForm = () => {
  return (
    <Form>
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
    </Form>
  );
};

export default SignInBlock;
