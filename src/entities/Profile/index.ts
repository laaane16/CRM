export { getProfileIsLoading } from './model/selectors/getProfileIsLoading/getProfileIsLoading';
export { getProfileData } from './model/selectors/getProfileData/getProfileData';
export { getProfileError } from './model/selectors/getProfileError/getProfileError';

export { profileFetchData } from './model/services/profileFetchData/profileFetchData';
export { profileReducer, profileActions } from './model/slice/profileSlice';

export { type ProfileSchema, type IProfile } from './model/types/ProfileSchema';
