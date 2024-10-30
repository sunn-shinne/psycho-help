import {Routes, Route, Navigate} from 'react-router-dom';
import { userRoutes, adminRoutes } from './routes';
import { HOME_PAGE } from '../../utils/route-constants';
import { FC } from 'react';

const AppRouter: FC = () => {
	const userRole = false; // роли юзера для навигации по админ страницам и страницам пользователя

	return (
		<Routes>
			{userRole && adminRoutes.map(( {path, Component} ) =>
				<Route key = {path} path = {path} element = {<Component />}/>
			)}
			{userRoutes.map(( {path, Component} ) =>
				<Route key = {path} path = {path} element = {<Component />}/>
			)}
			<Route path = "*" element = {<Navigate to={HOME_PAGE}/>} />
			{/* по аналогии отрисовываем навигацию для лругих ролей */}
		</Routes>
	)
}

export default AppRouter;