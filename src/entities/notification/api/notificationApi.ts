import { rtkApi } from '@/shared/api/rtkApi';
import { Notification } from '../model/types/Notification';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => '/notifications',
    }),
  }),
});

export const useNotifications = notificationApi.useGetNotificationsQuery;
