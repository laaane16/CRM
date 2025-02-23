import { StateSchema } from '../../../../../app/providers';

export const getTasksError = (state: StateSchema) => state.tasks?.error;
