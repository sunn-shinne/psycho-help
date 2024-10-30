import React from 'react';
import { user, doctors} from './constants';
import PersonalData from './components/personal-data/personal-data';
import { FC } from 'react';
import * as St from './personal-cabinet-style';
import ACalendar from './components/calendar/calendar';
import InputBlock from './components/input-block/input-block';

const PersonalCabinet: FC = () => {

	const [date, setDate] = React.useState('');

	const getDate = (param: any) => {
		setDate(param);
	}

	return (
		<St.wrapper>
			<St.main>
				<St.h1>Запись на прием</St.h1>
				<St.form method='post' action='127.0.0.1'>
					<ACalendar getDate={getDate} />
					<input type="hidden" name='date' value={date} required/>
					<InputBlock date={date} doctors={doctors} />
					<St.subButton type='submit'>Записаться</St.subButton>
				</St.form>
			</St.main>
			<St.aside>
				<PersonalData data={user} />
			</St.aside>
		</St.wrapper>
	)
}

export default PersonalCabinet;