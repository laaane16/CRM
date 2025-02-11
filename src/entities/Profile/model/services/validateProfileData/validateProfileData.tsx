import { IProfile } from '../../types/ProfileSchema';

export const validateProfileData = (profile: IProfile): string[] => {
  const { number, name, mail } = profile;
  const errors = [];

  const numberRegExp = /\+\d([\s.-]?)\(?\d{3}\)?([\s.-]?)\d{3}([\s.-]?)\d{2}([\s.-]?)\d{2}/;
  const numberIsValid = number && numberRegExp.test(number);

  // const nameRegExp = /[a-zA-Zа-яёА-ЯЁ]+/;
  // const nameIsValid = name && nameRegExp.test(name);

  const mailRegExp = /([a-zA-Zа-яёА-ЯЁ]+.?)+@\w+\.\w+/;
  const mailIsValid = name && mailRegExp.test(mail);

  if (!numberIsValid) {
    errors.push('Вы ввели некорректный номер телефона');
  }

  // if (!nameIsValid) {
  //   errors.push('Вы ввели некорректное имя');
  // }

  if (!mailIsValid) {
    errors.push('Вы ввели некорректную почту');
  }

  return errors;
};
