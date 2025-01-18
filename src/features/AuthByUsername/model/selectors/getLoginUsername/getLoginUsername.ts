import { useSelector } from 'react-redux';
import { StateSchema } from '../../../../../app/providers';

export const getLoginUsername = () => useSelector((state: StateSchema) => state?.login?.username);
