import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetProfileValidateErrros, getProfileValidateErrros] =
  buildSelector((state: StateSchema) => state.profile?.validation);
