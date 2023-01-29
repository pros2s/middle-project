import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetUserRoles, getUserRoles] = buildSelector(
  (state: StateSchema) => state.signin?.roles,
);
