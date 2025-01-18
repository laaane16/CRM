import { UserSchema } from '../../../../../entities/User';
import { LoginSchema } from '../../../../../features/AuthByUsername';

export interface StateSchema {
  login: LoginSchema;
  user: UserSchema;
}
