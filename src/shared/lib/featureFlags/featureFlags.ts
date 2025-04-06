import { IFeatureFlags } from '../../types/IFeatureFlags';

let featureFlags: IFeatureFlags;

export const getFeatureFlag = (featureFlag: keyof IFeatureFlags): boolean => {
  if (!featureFlags) {
    return false;
  }
  return featureFlags[featureFlag] || false;
};

export const setFeatureFlags = (features: IFeatureFlags) => {
  if (featureFlags) {
    return;
  }

  featureFlags = features;
};
