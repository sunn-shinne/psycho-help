import { FC, ReactNode } from 'react';
import React from 'react';
import * as St from './input-block-styles';
import { Idoctors } from '../../constants';

const InputBlock: FC<{date: string, doctors: Idoctors[]}> = ( { date, doctors } ) => {

	const doctorsElems = ():ReactNode[] => {
		return doctors.map((elem: Idoctors) => {
			return <option key={elem.id} value={elem.id}>{elem.surname} {elem.name} {elem?.lastname}</option>
		})
	}

	const [typeReception, setTypeReception] = React.useState('inPerson')

	return (
		<St.wrapper>
			<h2>{date}</h2>
			<St.input name='date' type='hidden' value={date} required/>
			<St.label htmlFor="doctor">
				<St.select name="doctor" id="doctor" required>
					{doctorsElems()}
				</St.select>
			</St.label>
			<St.label htmlFor="typeReception">
				<St.typeReception>
					<St.btTypeRec style={{backgroundColor: typeReception === 'online' ? '#5E8BF4' : 'white'}} onClick={() => setTypeReception('online')} type='button'>Онлайн</St.btTypeRec>
					<St.btTypeRec style={{backgroundColor: typeReception === 'inPerson' ? '#5E8BF4' : 'white'}} onClick={() => setTypeReception('inPerson')} type='button'>Очно</St.btTypeRec>
				</St.typeReception>
				<St.input id='typeReception' type='hidden' value={typeReception} name='typeReception' />
			</St.label>
			<St.addressTime>
				<St.label htmlFor="location">
					<St.select name="location" id="location" required>
						<option value="address1">address1</option>
						<option value="address2">address2</option>
					</St.select>
				</St.label>
				<St.label htmlFor="time">
					<St.input name='time' type="time" step={3600} min={"08:00"} max={"16:00"} required/>
				</St.label>
			</St.addressTime>
			<St.label htmlFor="comment">
				<St.input type='text' name="comment" id="comment" placeholder='Коротко опишите проблему' required/>
			</St.label>
		</St.wrapper>
	);
}

export default InputBlock;