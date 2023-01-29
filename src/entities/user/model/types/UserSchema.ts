export enum UserRoles {
  ADMIN = 'ADMIN',
  MANAGER = 'MANAGER',
}

export interface User {
  id: string;
  username?: string;
  avatar?: string;
  roles?: UserRoles[];
}

export interface UserSchema {
  authData?: User;
  avatar?: string;
  _inited: boolean;
}
