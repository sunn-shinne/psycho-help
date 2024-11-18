import React, { FC } from "react";
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
		<div>
			<Button type="primary" onClick={() => setModalOpen(!isModalOpen)}>
        Войти
      </Button>
			{isModalOpen && render(modalWindow)}
		</div>
	)
}

export default ModalWindow;