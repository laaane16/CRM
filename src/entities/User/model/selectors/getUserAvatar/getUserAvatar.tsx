import { StateSchema } from '../../../../../app/providers';

export const getUserAvatar = (state: StateSchema) => state.user?.avatar;
