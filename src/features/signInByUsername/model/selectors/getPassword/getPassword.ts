import { buildSelector } from '@/shared/lib/store';
import { StateSchema } from '@/app/providers/StoreProvider';

export const [useGetPassword, getPassword] = buildSelector(
  (state: StateSchema) => state.signin?.password || '',
);
