import { IProfile, ValidateProfileErrors } from '../../types/ProfileSchema';

export const validateProfileData = (profile: IProfile): string[] => {
  if (Object.keys(profile).length === 0) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const options = Object.values(profile)
    .map(Boolean)
    .find((i) => i === false);

  if (options === false) {
    return [ValidateProfileErrors.NO_DATA];
  }

  const { number, name, mail } = profile;
  const errors = [];

  const numberRegExp = /\+\d([\s.-]?)\(?\d{3}\)?([\s.-]?)\d{3}([\s.-]?)\d{2}([\s.-]?)\d{2}/;
  const numberIsValid = number && numberRegExp.test(number);

  // const nameRegExp = /[a-zA-Zа-яёА-ЯЁ]+/;
  // const nameIsValid = name && nameRegExp.test(name);

  const mailRegExp = /([a-zA-Zа-яёА-ЯЁ]+.?)+@\w+\.\w+/;
  const mailIsValid = name && mailRegExp.test(mail);

  if (!numberIsValid) {
    errors.push(ValidateProfileErrors.INCORRECT_NUMBER);
  }

  // if (!nameIsValid) {
  //   errors.push('Вы ввели некорректное имя');
  // }

  if (!mailIsValid) {
    errors.push(ValidateProfileErrors.INCORRECT_MAIL);
  }

  return errors;
};
