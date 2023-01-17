import { StateSchema } from '@/app/providers/StoreProvider';

export const getAvatarLoginBtn = (state: StateSchema) =>
  state.avatarLogInBtn?.isLogInModal;
