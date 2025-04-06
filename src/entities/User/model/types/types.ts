import { IFeatureFlags } from '../../../../shared/types/IFeatureFlags';

export type IRole = 'admin' | 'user';

export interface UserSchema {
  id: number | null;
  username: string;
  avatar: string;
  roles: IRole[];
  featureFlags?: IFeatureFlags;
}
