import { StateSchema } from '../../../../../app/providers';

export const getLoginPassword = (state: StateSchema) => state?.login?.password || undefined;
