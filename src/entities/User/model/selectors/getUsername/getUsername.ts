import { useSelector } from 'react-redux';
import { StateSchema } from '../../../../../app/providers';

export const getUsername = () => useSelector((state: StateSchema) => state.user.username);
