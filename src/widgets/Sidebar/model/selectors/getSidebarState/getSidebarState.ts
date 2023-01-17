import { StateSchema } from '@/app/providers/StoreProvider';

export const getSidebarCollapsed = (state: StateSchema) =>
  state.sidebar.collapsed;
