import { Profile } from '@/entities/profile';
import { UserRoles } from '@/entities/user';


export interface SignInByUsernameSchema {
  password: string;
  repeatPassword: string;
  isOpenSignInModal: boolean;
  profileData: Profile;
  roles: UserRoles[];
}
