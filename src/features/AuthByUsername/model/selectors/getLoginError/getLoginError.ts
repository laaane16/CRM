import { StateSchema } from '../../../../../app/providers';

export const getLoginError = (state: StateSchema) => state.login?.error || undefined;
