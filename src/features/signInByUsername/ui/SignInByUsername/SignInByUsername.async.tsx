import { FC, lazy } from 'react';
import { SignInByUsernameProps } from './SignInByUsername';

export const SignInByUsernameAsync = lazy<FC<SignInByUsernameProps>>(
  () => import('./SignInByUsername'),
);
