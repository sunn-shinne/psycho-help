import { FC } from 'react';
import HomePage from '../../pages/home-page/home-page';
import PersonalCabinet from '../../pages/personal-cabinet/personal-cabinet';
import FaqPage from '../../pages/faq-page/faq-page';

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
    Component: FaqPage,
  },
];
