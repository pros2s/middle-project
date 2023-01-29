import { StateSchema } from '@/app/providers/StoreProvider';
import { buildSelector } from '@/shared/lib/store';

export const [useGetRepeatPassword, getRepeatPassword] = buildSelector(
  (state: StateSchema) => state.signin?.repeatPassword,
);
