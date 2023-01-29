import { buildSelector } from '@/shared/lib/store';
import { StateSchema } from '@/app/providers/StoreProvider';

export const [useGetIsOpenSignInModal, getIsOpenSignInModal] = buildSelector(
  (state: StateSchema) => state.signin?.isOpenSignInModal,
);
