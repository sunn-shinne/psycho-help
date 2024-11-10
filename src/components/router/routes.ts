import { FC } from 'react';
import HomePage from '../../pages/home-page/home-page';
import PersonalCabinet from '../../pages/personal-cabinet/personal-cabinet';
import { FAQ, HOME_PAGE, PERSONAL_CABINET } from '../../utils/route-constants';
import FaqBlock from '../../pages/faq/faq-block';

interface routePath {
  path: string;
  Component: FC<any>;
}

export const userRoutes: routePath[] = [
  {
    path: HOME_PAGE,
    Component: HomePage,
  },
  {
    path: PERSONAL_CABINET,
    Component: PersonalCabinet,
  },
  {
    path: FAQ,
    Component: FaqBlock,
  },
];

export const adminRoutes: routePath[] = [
  // пути к админ страницам
];
