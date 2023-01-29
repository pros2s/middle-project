export { EditableProfileCard } from './ui/EditableProfileCard/EditableProfileCard';
export {
  ValidateProfileError,
  profileValidateTranslates,
} from './model/types/editableProfileCardSchema';
export type { ProfileSchema } from './model/types/editableProfileCardSchema';
export { profileReducer, useProfileActions } from './model/slice/ProfileSlice';
export { useGetProfileValidateErrros } from './model/selectors/getProfileValidateErrros/getProfileValidateErrros';
export { validateProfileData } from './model/services/validateProfileData/validateProfileData';
