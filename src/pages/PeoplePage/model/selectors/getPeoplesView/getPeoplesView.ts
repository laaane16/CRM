import { StateSchema } from '../../../../../app/providers';
import { IView } from '../../types/PeoplesSchema';

export const getPeoplesView = (state: StateSchema) => state.peoples?.view || IView.LIST;
