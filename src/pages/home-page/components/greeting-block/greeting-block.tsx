import { Button, Flex, Image, Typography } from 'antd';
import GreetingImage from '../../../../assets/images/greeting-screen.png';
import { SERVICE_PROPS } from '../../constants';
import styled from 'styled-components';

const GreetingBlock = styled(Flex)`
  min-height: calc(100vh - 200px);
`;

const GreetingImageWrapper = styled.div`
  margin: auto;
  max-width: 50vw;
  margin-top: 40px;
  min-width: 350px;
`;

const GreetingTitle = styled(Typography.Title)`
  margin-bottom: 20px;
`;

const GreatingBlock = () => {
  return (
    <GreetingBlock wrap="wrap">
      <Flex vertical flex={14} justify="space-between" style={{ minWidth: '50%' }}>
        <Flex vertical gap={20}>
          <Typography.Title level={4} style={{ fontSize: '16px', color: '#5e8bf4' }}>
            СЛУЖБА ПСИХОЛОГИЧЕСКОЙ ПОМОЩИ
          </Typography.Title>

          <GreetingTitle level={1}>
            <span>
              Профессиональная помощь
              <br />
              студентам и сотрудникам университета
            </span>
          </GreetingTitle>

          <GreetingTitle>
            {SERVICE_PROPS.map((item) => (
              <Typography.Paragraph>
                <Flex gap={24} style={{ fontSize: '18px' }}>
                  <span>—</span>
                  {item}
                </Flex>
              </Typography.Paragraph>
            ))}
          </GreetingTitle>
          <Button
            style={{
              width: '30%',
              background: '#5e8bf4',
              fontStyle: 'bold',
              fontSize: '16px',
              borderRadius: '10px',
            }}
            type="primary"
            htmlType="submit"
          >
            Записаться
          </Button>
        </Flex>
      </Flex>
      <Flex vertical flex={10} justify="space-between" style={{ alignSelf: 'center' }}>
        <GreetingImageWrapper>
          <Image
            src={GreetingImage}
            preview={false}
            height={'100%'}
            alt="Иллюстрация на главной странице"
          />
        </GreetingImageWrapper>
        <Typography.Paragraph
          style={{
            background: '#e8effd',
            padding: '10px',
            borderRadius: '10px',
            fontSize: '17px',
            fontWeight: 'bold',
            color: '#373535',
          }}
        >
          <b>Важно!</b> Консультации проходят в очном и онлайн режиме, бесплатны и конфиденциальны.
        </Typography.Paragraph>
      </Flex>
    </GreetingBlock>
  );
};

export default GreatingBlock;
