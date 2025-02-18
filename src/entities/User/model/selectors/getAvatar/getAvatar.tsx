import { StateSchema } from '../../../../../app/providers';

export const getAvatar = (state: StateSchema) => state?.user?.avatar;
