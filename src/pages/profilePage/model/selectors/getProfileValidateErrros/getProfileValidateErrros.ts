import { StateSchema } from 'app/providers/StoreProvider';

export const getProfileValidateErrros = (state: StateSchema) =>
  state.profile?.validation;
