import { useSelector } from 'react-redux';
import { StateSchema } from '../../../../../app/providers';

export const getUserId = () => useSelector((state: StateSchema) => state.user.id);
