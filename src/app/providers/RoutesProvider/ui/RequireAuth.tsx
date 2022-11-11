import { getUserAuthData } from 'entities/user';
import { useSelector } from 'react-redux';
import { Navigate, useLocation } from 'react-router-dom';
import { RoutesPaths } from 'shared/lib/routes/routes';

export const RequireAuth = ({ children }: { children: JSX.Element }) => {
  const auth = useSelector(getUserAuthData);
  const location = useLocation();

  if (!auth.authData) {
    return (
      <Navigate to={RoutesPaths.main} state={{ from: location }} replace />
    );
  }

  return children;
};
