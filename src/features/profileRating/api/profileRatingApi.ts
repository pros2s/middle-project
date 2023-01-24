import { Raiting } from '@/entities/raiting';
import { rtkApi } from '@/shared/api/rtkApi';

interface ProfileRaitingArg {
  profileId: string;
  userId: string;
}

interface RateProfileArg {
  profileId: string;
  userId: string;
  rate: number;
  feedback?: string;
}

const ProfileRaitingApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getProfileRaiting: build.query<Raiting[], ProfileRaitingArg>({
      query: ({ profileId, userId }) => ({
        url: '/profile-raiting',
        params: {
          profileId,
          userId,
        },
      }),
    }),
    rateProfile: build.mutation<void, RateProfileArg>({
      query: (args) => ({
        url: '/profile-raiting',
        method: 'post',
        body: args,
      }),
    }),
  }),
});

export const useProfileRaiting = ProfileRaitingApi.useGetProfileRaitingQuery;
export const useRateProfile = ProfileRaitingApi.useRateProfileMutation;
