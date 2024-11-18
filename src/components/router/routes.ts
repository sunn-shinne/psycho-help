import { FC } from 'react';
import HomePage from '../../pages/home-page/home-page';
import PersonalCabinet from '../../pages/personal-cabinet/personal-cabinet';
import FaqBlock from '../../pages/faq/faq-block';

interface routePath {
  path: string;
  Component: FC<any>;
}

export const routes: routePath[] = [
  {
    path: '/',
    Component: HomePage,
  },
  {
    path: '/cabinet',
    Component: PersonalCabinet,
  },
  {
    path: '/faq',
    Component: FaqBlock,
  },
];
