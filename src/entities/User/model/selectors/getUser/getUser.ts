import { useSelector } from 'react-redux';
import { StateSchema } from '../../../../../app/providers';

export const getUser = () => useSelector((state: StateSchema) => state.user);
