import { Themes } from '../../../../shared/theme';
import { IFeatureFlags } from '../../../../shared/types/IFeatureFlags';

export type IRole = 'admin' | 'user';

export interface IJsonSettings {
  theme: Themes;
}

export interface UserSchema {
  id: number | null;
  username: string;
  avatar: string;
  roles: IRole[];
  featureFlags?: IFeatureFlags;
  jsonSettings?: IJsonSettings;
  isJsonSettingsLoading?: boolean;
}
