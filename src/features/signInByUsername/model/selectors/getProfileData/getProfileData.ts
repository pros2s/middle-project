import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetProfileData, getProfileData] = buildSelector(
  (state: StateSchema) => state.signin?.profileData,
);
