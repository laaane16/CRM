import { StateSchema } from '../../../../../app/providers';

export const getPeoplesLimit = (state: StateSchema) => state.peoples?.limit;
