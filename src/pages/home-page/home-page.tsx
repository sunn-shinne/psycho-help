import React, { FC, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Typography } from 'antd';
import GreetingBlock from './components/greeting-block/greeting-block';
import ReasonsBlock from './components/reasons-block/reasons-block';
import FeaturesBlock from './components/features-block/features-block';
import CanSignInBlock from './components/can-sign-in-block/can-sign-in-block';
import ChartBlock from './components/chart-block/schedule-block';
import SignInBlock from './components/sign-in-block/sign-in-block';
import TherapistsBlock from './components/doctors-block/doctors-block';
import FaqBlock from './components/faq-block/faq-block';
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
	name: string;
}

const blocks: BlockWrapperProps[] = [
  { component: GreetingBlock, style: Block, name: "Greeting" },
  { component: ReasonsBlock, style: Block, title: 'С чем может помочь психолог?', name: "reasons" },
  { component: TherapistsBlock, style: BlockBlue, title: 'Психологи службы', name: "therapists" },
  { component: FeaturesBlock, style: Block, title: 'Особенности работы службы', name: "features" },
  { component: SignInBlock, style: Block, title: 'Записаться прямо сейчас', name: "signIn" },
  { component: CanSignInBlock, style: Block, title: 'Так же записатья на консультацию можно:', name: "canSignIn" },
  { component: ChartBlock, style: BlockBlue, title: 'График работы', name: "chart" },
  { component: FaqBlock, style: Block, props: { questions: faq }, name: "faq" },
];

const BlockWrapper = React.forwardRef<BlockWrapperProps, any>(({
  component: Component,
  style: Style,
  title,
  props,
}, ref) => (
  <Style ref={ref}>
    <ContentWrapper>
      {title && (
        <Title level={2} style={{ fontSize: '24px' }}>
          {title}
        </Title>
      )}
      <Component {...props} />
    </ContentWrapper>
  </Style>
));

const HomePage: FC = () => {

	const refs = useRef<any[]>(blocks.map(() => null));

	const location = useLocation();

	useEffect(() => {
		if (location.hash) {
      window.history.replaceState(null, '', window.location.pathname);
    }

    if (location.hash) {
      const targetRefIndex = blocks.findIndex(
        (block) => `#${block.name}` === location.hash
      );

      if (targetRefIndex !== -1 && refs.current[targetRefIndex]) {
        refs.current[targetRefIndex]?.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);


  return (
    <div>
      {blocks.map((block, index) => (
        <BlockWrapper key={index} {...block} ref={(el) => (refs.current[index] = el)} />
      ))}
    </div>
  );
};

export default HomePage;
