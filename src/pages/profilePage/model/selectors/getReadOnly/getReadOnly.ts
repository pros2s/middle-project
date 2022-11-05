import { StateSchema } from 'app/providers/StoreProvider';

export const getReadOnly = (state: StateSchema) => state.profile?.readonly;
