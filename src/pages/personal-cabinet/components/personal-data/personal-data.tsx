import React, { FC } from "react";
import { Iuser } from "../../constants";
import * as St from './personal-data-styles';

const PersonalData: FC<{data: Iuser}> = ( { data } ) => {

	const edit = () => {

	}

	const logOut = () => {

	}

	return (
		<St.wrapper>
			<St.head>
				<b>{data.surname} {data.name} {data.lastname}</b>
				<St.edit onClick={edit}></St.edit>
			</St.head>
			<p>{data.email}</p>
			<p>{data.phoneNumber}</p>
			<St.button onClick={logOut}>Выход</St.button>
		</St.wrapper>
	)
}

export default PersonalData;