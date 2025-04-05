import { rtkApi } from '../../../shared/api/rtkApi';

const notificationApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getNotifications: build.query<Notification[], null>({
      query: () => ({
        url: '/notifications',
      }),
    }),
  }),
});

export const { useGetNotificationsQuery } = notificationApi;
