import { StateSchema } from '../../../../../app/providers';
import { getProfileData } from './getProfileData';

describe('getProfileData.test', () => {
  test('work with filled state', () => {
    const state: DeepPartial<StateSchema> = {
      profile: {
        data: {
          name: 'John',
          number: '+79871234312',
          mail: 'testmail@gmail.com',
          userId: 1,
          telegram: '@alex_solo',
          age: 22,
          post: {
            main: '',
            extra: '',
          },
          address: '',
          avatar: 'https://timeweb.com/ru/community/article/43/4372a42395939b59d7e234e6042983f8.jpg',
          createdAt: '12.05.2019',
          updatedAt: '20.01.2020',
        },
      },
    };
    expect(getProfileData(state as StateSchema)).toBe(state.profile?.data);
  });

  test('work with empty state', () => {
    const state: DeepPartial<StateSchema> = {};
    expect(getProfileData(state as StateSchema)).toBe(undefined);
  });
});
