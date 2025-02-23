import { StateSchema } from '../../../../../app/providers';

export const getTasksIsLoading = (state: StateSchema) => state.tasks?.isLoading;
