import { FC } from 'react';
import { Typography } from 'antd';
import GreetingBlock from './components/greeting-block/greeting-block';
import ReasonsBlock from './components/reasons-block/reasons-block';
import FeaturesBlock from './components/features-block/features-block';
import CanSignInBlock from './components/can-sign-in-block/can-sign-in-block';
import ChartBlock from './components/chart-block/schedule-block';
import QuestionsList from './components/question-block/questions-list';
import SignInBlock from './components/sign-in-block/sign-in-block';
import TherapistsBlock from './components/doctors-block/doctors-block';
import { faq } from './constants';
import styled from 'styled-components';

const Block = styled.div`
  padding-block: 48px;
  padding-inline: 24px;
`;

const BlockBlue = styled.div`
  padding: 12px 24px 24px;
  background: #d9e5ff;
`;

const ContentWrapper = styled.div`
  max-width: 1440px;
  margin: auto;
  width: 100%;
`;

const Title = styled(Typography.Title)`
  text-align: center;
  margin-bottom: 24px;
`;

interface BlockWrapperProps {
  component: FC<any>;
  style: typeof Block | typeof BlockBlue;
  title?: string;
  props?: any;
}

const blocks: BlockWrapperProps[] = [
  { component: GreetingBlock, style: Block },
  { component: ReasonsBlock, style: Block, title: 'С чем может помочь психолог?' },
  { component: TherapistsBlock, style: BlockBlue, title: 'Психологи службы' },
  { component: FeaturesBlock, style: Block, title: 'Особенности работы службы' },
  { component: ChartBlock, style: BlockBlue, title: 'График работы' },
];

const BlockWrapper: FC<BlockWrapperProps> = ({
  component: Component,
  style: Style,
  title,
  props,
}) => (
  <Style>
    <ContentWrapper>
      {title && (
        <Title level={2} style={{ fontSize: '28px' }}>
          {title}
        </Title>
      )}
      <Component {...props} />
    </ContentWrapper>
  </Style>
);

const HomePage: FC = () => {
  return (
    <div>
      {blocks.map((block, index) => (
        <BlockWrapper key={index} {...block} />
      ))}
    </div>
  );
};

export default HomePage;
