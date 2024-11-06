import React, { useState } from 'react';
import { Button, Modal, Input, Checkbox } from 'antd';
import { ErrorText, Form } from '../../../../../global-styles';

const INITIAL_FORM_VALUE = {
  email: '',
  password: '',
};

const ModalLogin: React.FC = () => {
  const [formValue, setFormValue] = useState({ ...INITIAL_FORM_VALUE });
  const [errors, setErrors] = useState({ ...INITIAL_FORM_VALUE });
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
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

  const handleCancel = () => setOpen(false);

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
      <Button type="primary" onClick={() => setOpen(true)}>
        Войти
      </Button>
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
            <button style={{outline: 'none', border: 'none', background: 'none'}}><a href=""> Регистрация</a></button>
          </p>
        </Form>
      </Modal>
    </>
  );
};

export default ModalLogin;


// import React, { useState, useMemo } from 'react';
// import { Button, Modal, Input } from 'antd';
// import InputMask from 'react-input-mask';
// import { ErrorText, Form } from '../../../../../global-styles';

// const INITIAL_FORM_VALUE = {
//   email: '',
//   password: '',
// };

// const ModalRegistration: React.FC = () => {
//   const [formValue, setFormValue] = useState({ ...INITIAL_FORM_VALUE });
//   const [errors, setErrors] = useState({ ...INITIAL_FORM_VALUE });

//   const resetForm = () => {
//     setFormValue({ ...INITIAL_FORM_VALUE });
//     setErrors({ ...INITIAL_FORM_VALUE });
//   };

//   const [loading, setLoading] = useState(false);
//   const [open, setOpen] = useState(false);

//   const validateFirstName = (name: string) =>
//     /^[a-zа-я]+$/i.test(name) ? '' : 'Имя не должно содержать цифр';

//   const validateLastName = (name: string) =>
//     /^[a-zа-я]+$/i.test(name) ? '' : 'Фамилия не должна содержать цифр';

//   const validatePhoneNumber = (phoneNumber: string) => {
//     const sanitizedNumber = phoneNumber.replace(/[^0-9+]/g, '');
//     return sanitizedNumber.length === 12 && sanitizedNumber.startsWith('+7')
//       ? ''
//       : 'Номер телефона должен быть в формате +79999999999';
//   };

//   const validateEmail = (email: string) =>
//     /^[\w-]+(\.[\w-]+)*@[\w-]+\.[a-z]{2,6}$/i.test(email)
//       ? ''
//       : 'Некорректный формат электронной почты';

//   const validatePassword = (password: string) => {
//     if (password.length < 8) {
//       return 'Пароль должен содержать не менее 8 символов';
//     }
//     if (!/[0-9]/.test(password)) {
//       return 'Пароль должен содержать хотя бы одну цифру';
//     }
//     if (!/[a-zA-Z]/.test(password)) {
//       return 'Пароль должен содержать хотя бы одну латинскую букву';
//     }
//     if (!/[!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       return 'Пароль должен содержать хотя бы один специальный символ';
//     }
//     if (/[^a-zA-Z0-9!@#$%^&*(),.?":{}|<>]/.test(password)) {
//       return 'Пароль может содержать только латинские буквы, цифры и специальные символы';
//     }
//     return '';
//   };



//   const validateForm = () => {
//     const newErrors = {
//       email: validateEmail(formValue.email),
//       password: validatePassword(formValue.password),
//     };
//     setErrors(newErrors);
//     return Object.values(newErrors).every((error) => error === '');
//   };

//   const handleOk = () => {
//     if (!validateForm()) return;
//     setLoading(true);
//     setTimeout(() => {
//       setLoading(false);
//       resetForm();
//       setOpen(false);
//     }, 1000);
//   };

//   const handleCancel = () => setOpen(false);

//   const formComplete = useMemo(() => {
//     return Object.values(formValue).every((value) => value.trim() !== '');
//   }, [formValue]);

//   const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const { name, value } = e.target;
//     const filteredValue =
//       name === 'firstName' || name === 'lastName' ? value.replace(/[0-9\s]/g, '') : value;
//     setFormValue((prevValues) => ({
//       ...prevValues,
//       [name]: filteredValue,
//     }));
//     setErrors((prevErrors) => ({
//       ...prevErrors,
//       [name]: '',
//     }));
//   };

//   return (
//     <>
//       <Button color="default" onClick={() => setOpen(true)}>
//         Зарегистрироваться
//       </Button>
//       <Modal
//         open={open}
//         title="Регистрация"
//         onOk={handleOk}
//         onCancel={handleCancel}
//         footer={[
//           <Button
//             key="submit"
//             type="primary"
//             loading={loading}
//             onClick={handleOk}
//             disabled={!formComplete}
//           >
//             Зарегистрироваться
//           </Button>,
//         ]}
//       >
//         <Form>
//           <label>
//             <span>Ваше имя</span>
//             <Input
//               name="firstName"
//               value={formValue.firstName}
//               placeholder="Введите имя"
//               onChange={handleInputChange}
//             />
//             {errors.firstName && <ErrorText>{errors.firstName}</ErrorText>}
//           </label>
//           <label>
//             <span>Ваша фамилия</span>
//             <Input
//               name="lastName"
//               value={formValue.lastName}
//               placeholder="Введите фамилию"
//               onChange={handleInputChange}
//             />
//             {errors.lastName && <ErrorText>{errors.lastName}</ErrorText>}
//           </label>
//           <label>
//             <span>Номер телефона</span>
//             <InputMask
//               name="phoneNumber"
//               value={formValue.phoneNumber}
//               mask="+79999999999"
//               onChange={handleInputChange}
//             >
//               {<Input type="tel" placeholder="+79999999999" />}
//             </InputMask>
//             {errors.phoneNumber && <ErrorText>{errors.phoneNumber}</ErrorText>}
//           </label>
//           <label>
//             <span>Электронная почта</span>
//             <Input
//               name="email"
//               value={formValue.email}
//               placeholder="primer@gmail.com"
//               onChange={handleInputChange}
//             />
//             {errors.email && <ErrorText>{errors.email}</ErrorText>}
//           </label>
//           <label>
//             <span>Пароль</span>
//             <Input.Password
//               name="password"
//               value={formValue.password}
//               placeholder="Введите пароль"
//               onChange={handleInputChange}
//             />
//             {errors.password && <ErrorText>{errors.password}</ErrorText>}
//           </label>
//           <label>
//             <span>Повторите пароль</span>
//             <Input.Password
//               name="confirmPassword"
//               value={formValue.confirmPassword}
//               placeholder="Введите пароль ещё раз"
//               onChange={handleInputChange}
//             />
//             {errors.confirmPassword && <ErrorText>{errors.confirmPassword}</ErrorText>}
//           </label>
//           <p>
//             У вас уже есть учётная запись?
//             <a href="/">
//               <span> Войти</span>
//             </a>
//           </p>
//         </Form>
//       </Modal>
//     </>
//   );
// };

// export default ModalRegistration;
