import { Profile } from '@/entities/profile';
import { User, UserRoles } from '@/entities/user';
import { rtkApi } from '@/shared/api/rtkApi';

interface CreateNewUserProps {
  password: string;
  username: string;
  roles?: UserRoles[];
  avatar?: string;
  id: string;
}

const SignInApi = rtkApi.injectEndpoints({
  endpoints: (build) => ({
    getUsers: build.query<User[], void>({
      query: () => ({
        url: '/users',
        headers: { Authorization: 'newUser' },
      }),
    }),
    createNewUser: build.mutation<User, CreateNewUserProps>({
      query: (args) => ({
        url: '/users',
        method: 'post',
        headers: { Authorization: 'newUser' },
        body: args,
      }),
    }),
    createNewProfile: build.mutation<Profile, Profile>({
      query: (args) => ({
        url: '/profile',
        method: 'post',
        headers: { Authorization: 'newProfile' },
        body: args,
      }),
    }),
  }),
});

export const getUsers = SignInApi.useGetUsersQuery;
export const useCreateNewUser = SignInApi.useCreateNewUserMutation;
export const useCreateNewProfile = SignInApi.useCreateNewProfileMutation;
