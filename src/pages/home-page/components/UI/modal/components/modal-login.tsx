import React, { useState } from 'react';
import { Button, Modal, Input, Checkbox } from 'antd';
import { ErrorText, Form } from '../../../../../../global-styles';

const INITIAL_FORM_VALUE = {
  email: '',
  password: '',
};

type Tprops = {
	setWindow: (param: string) => any;
	isOpen: boolean;
	setModalOpen: (param: boolean) => any;
}

const ModalLogin: React.FC<Tprops> = ( { setWindow, isOpen, setModalOpen } ) => {

  const [formValue, setFormValue] = useState({ ...INITIAL_FORM_VALUE });
  const [errors, setErrors] = useState({ ...INITIAL_FORM_VALUE });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(isOpen);
  const [rememberMe, setRememberMe] = useState(false);


  const validateEmail = (email: string) =>
    /^[\w-]+(\.[\w-]+)*@[\w-]+\.[a-z]{2,6}$/i.test(email)
      ? ''
      : 'Некорректный формат электронной почты';

  const validatePassword = (password: string) =>
    password ? '' : 'Пароль не может быть пустым';

  const validateForm = () => {
    const newErrors = {
      email: validateEmail(formValue.email),
      password: validatePassword(formValue.password),
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleOk = () => {
    if (!validateForm()) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 1000);
  };

  const handleCancel = () => {
		setOpen(false);
		setModalOpen(false);
	};
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormValue((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: '',
    }));
  };

  return (
    <>
      <Modal
        open={open}
        title="Вход"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button
            key="submit"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Войти
          </Button>,
        ]}
      >
        <Form>
          <label>
            <span>Электронная почта</span>
            <Input
              name="email"
              value={formValue.email}
              placeholder="primer@gmail.com"
              onChange={handleInputChange}
            />
            {errors.email && <ErrorText>{errors.email}</ErrorText>}
          </label>
          <label>
            <span>Пароль</span>
            <Input.Password
              name="password"
              value={formValue.password}
              placeholder="Введите пароль"
              onChange={handleInputChange}
            />
            {errors.password && <ErrorText>{errors.password}</ErrorText>}
          </label>
            <Checkbox
                style={{display: 'flex'}}
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
            >
                Запомнить меня
            </Checkbox>
            <p>
                <a href="/forgot-password">Забыли пароль?</a>
            </p>
          <p>
            У вас еще нет учетной записи?
          </p>
					<Button type='default' onClick={() => setWindow('reg')}><span>Регистрация</span></Button>
        </Form>
      </Modal>
    </>
  );
};

export default ModalLogin;


