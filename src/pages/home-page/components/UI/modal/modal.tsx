import React, { FC } from "react";
import * as St from './modal-style';
import ModalLogin from "./components/modal-login";
import ModalRegistration from "./components/modal-registration";
import { Button } from 'antd';

const ModalWindow:FC = () => {

	const [modalWindow, setModalWindow] = React.useState<string>('log');
	const [isModalOpen, setModalOpen] = React.useState<boolean>(false);

	const render = (window: string) => {
		if (window === 'log') {
			return <ModalLogin setWindow={setModalWindow} isOpen setModalOpen={setModalOpen}/>
		}
		if(window === 'reg') {
			return <ModalRegistration setWindow={setModalWindow} isOpen setModalOpen={setModalOpen}/>
		}
	}

	return (
		<St.wrapper>
			<Button type="primary" onClick={() => setModalOpen(!isModalOpen)}>
        Войти
      </Button>
			{isModalOpen && render(modalWindow)}
		</St.wrapper>
	)
}

export default ModalWindow;