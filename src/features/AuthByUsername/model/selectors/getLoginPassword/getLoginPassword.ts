import { useSelector } from 'react-redux';
import { StateSchema } from '../../../../../app/providers';

export const getLoginPassword = () => useSelector((state: StateSchema) => state?.login?.password);
