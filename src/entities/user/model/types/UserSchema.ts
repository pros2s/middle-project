enum UserRoles {
  ADMIN = 'ADMIN',
  USER = 'USER',
}

export interface User {
  id: string;
  username?: string;
  avatar?: string;
  role?: UserRoles;
}

export interface UserSchema {
  authData?: User;
  _inited: boolean;
}
