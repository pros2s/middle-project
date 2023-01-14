import { StateSchema } from 'app/providers/StoreProvider';
import { UserRoles } from '../../types/UserSchema';
import { getUserRoles, hasAdminRole, hasManagerRole } from './getUserRoles';

const user = { authData: { roles: [UserRoles.ADMIN, UserRoles.MANAGER] } };

describe('getUserRoless', () => {
  test('should return user roles state', () => {
    const state: DeepPartial<StateSchema> = {
      user,
    };

    expect(getUserRoles(state as StateSchema)).toEqual([
      UserRoles.ADMIN,
      UserRoles.MANAGER,
    ]);
  });

  test('has user some roles', () => {
    const bothState: DeepPartial<StateSchema> = {
      user,
    };
    const managerState: DeepPartial<StateSchema> = {
      user: { authData: { roles: [UserRoles.MANAGER] } },
    };

    expect(hasAdminRole(bothState as StateSchema)).toBe(true);
    expect(hasAdminRole(managerState as StateSchema)).toBe(false);

    expect(hasManagerRole(bothState as StateSchema)).toBe(true);
    expect(hasManagerRole(managerState as StateSchema)).toBe(true);
  });
});
