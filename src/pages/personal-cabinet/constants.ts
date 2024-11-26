export interface Iuser {
  name: string;
  surname: string;
  lastname?: string;
  email: string;
  phoneNumber: string;
}

export interface Idoctors {
  name: string;
  surname: string;
  lastname?: string;
  id: number;
}

export const user: Iuser = {
  name: 'Иван',
  surname: 'Иванов',
  lastname: 'Иванович',
  email: 'ivanov_ivan@yandex.ru',
  phoneNumber: '+7 (900) 999-99-99',
};

export const doctors: Idoctors[] = [
  {
    name: 'Виктория',
    surname: 'Орлова',
    id: 1,
  },
  {
    name: 'Лейла',
    surname: 'Абасова',
    id: 2,
  },
  {
    name: 'Марьям',
    surname: 'Расулова',
    id: 3,
  },
  {
    name: 'Анастасия',
    surname: 'Пузий',
    id: 4,
  },
];
