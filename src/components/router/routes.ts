import { FC } from "react";
import HomePage from "../../pages/home-page/home-page";
import PersonalCabinet from "../../pages/personal-cabinet/personal-cabinet";
import { HOME_PAGE, PERSONAL_CABINET } from "../../utils/route-constants";

interface routePath {
	path: string;
	Component: FC;
}

export const userRoutes: routePath[] = [
	{
		path: HOME_PAGE,
		Component: HomePage
	},
	{
		path: PERSONAL_CABINET,
		Component: PersonalCabinet
	}
];

export const adminRoutes: routePath[] = [
	// пути к админ страницам
];