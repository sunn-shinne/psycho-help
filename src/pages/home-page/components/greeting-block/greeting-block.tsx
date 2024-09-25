import { Flex, Image, Typography } from 'antd';
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
          <Typography.Title level={4} style={{ fontSize: '16px' }}>
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
                <Flex gap={24}>
                  <span>—</span>
                  {item}
                </Flex>
              </Typography.Paragraph>
            ))}
          </GreetingTitle>
        </Flex>

        <Typography.Paragraph strong>
          Важно! Консультации проходят в очном и онлайн режиме, бесплатны и конфиденциальны.
        </Typography.Paragraph>
      </Flex>
      <Flex vertical flex={10} justify="space-between" style={{ alignSelf: 'end' }}>
        <GreetingImageWrapper>
          <Image
            src={GreetingImage}
            preview={false}
            height={'100%'}
            alt="Иллюстрация на главной странице"
          />
        </GreetingImageWrapper>
      </Flex>
    </GreetingBlock>
  );
};

export default GreatingBlock;
