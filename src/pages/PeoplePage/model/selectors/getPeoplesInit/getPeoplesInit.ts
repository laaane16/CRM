import { StateSchema } from '../../../../../app/providers';

export const getPeoplesInit = (state: StateSchema) => state.peoples?._inited;
