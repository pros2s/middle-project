import { getUserAuthData, getUserRoles, UserRoles } from 'entities/user';
import { useMemo } from 'react';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPaths } from 'shared/lib/routes/routes';

interface RequireAuthProps {
  children: JSX.Element;
  roles?: UserRoles[];
}

export const RequireAuth = ({ children, roles }: RequireAuthProps) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();
  const userRoles = useSelector(getUserRoles);

  const hasRequireRole = useMemo(() => {
    if (!roles) {
      return true;
    }

    return roles?.some((role) => userRoles?.includes(role));
  }, [roles, userRoles]);

  if (!auth.authData) {
    return (
      <Navigate to={RoutesPaths.main} state={{ from: location }} replace />
    );
  }

  if (!hasRequireRole) {
    return (
      <Navigate to={RoutesPaths.forbidden} state={{ from: location }} replace />
    );
  }
  
  return children;
};
