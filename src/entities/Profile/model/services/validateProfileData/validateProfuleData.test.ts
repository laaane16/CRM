import { IProfile, ValidateProfileErrors } from '../../types/ProfileSchema';
import { validateProfileData } from './validateProfileData';

const data = {
  name: 'John',
  number: '+79871234312',
  mail: 'testmail@gmail.com',
  userId: 1,
  telegram: '@alex_solo',
  age: 22,
  post: {
    main: 'main work',
    extra: 'extra work',
  },
  address: 'asd',
  avatar: 'https://timeweb.com/ru/community/article/43/4372a42395939b59d7e234e6042983f8.jpg',
  createdAt: '12.05.2019',
  updatedAt: '20.01.2020',
};

describe('validateProfuleData.test', () => {
  test('correct user data', () => {
    const result = validateProfileData(data);
    expect(result).toEqual([]);
  });

  test('no data', () => {
    const result = validateProfileData({} as IProfile);
    expect(result).toEqual([ValidateProfileErrors.NO_DATA]);
  });

  test('incorrect user number', () => {
    const result = validateProfileData({ ...data, number: '+7' });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_NUMBER]);
  });

  test('incorrect user mail', () => {
    const result = validateProfileData({ ...data, mail: '1231' });
    expect(result).toEqual([ValidateProfileErrors.INCORRECT_MAIL]);
  });
});
