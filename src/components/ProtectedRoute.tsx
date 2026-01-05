import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Role } from '../lib/auth';

interface ProtectedRouteProps {
  allowedRoles: Role[];
  requireVerified?: boolean;
}

const ProtectedRoute = ({ allowedRoles, requireVerified = false }: ProtectedRouteProps) => {
  const { user, role, verificationStatus, loading } = useAuth();
  const location = useLocation();

  if (loading) {
    return <div className="flex h-screen items-center justify-center"><div>Loading...</div></div>;
  }

  if (!user || !role) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }

  if (!allowedRoles.includes(role)) {
    return <Navigate to="/home" replace />;
  }

  if (role === 'educator' && requireVerified) {
    if (verificationStatus === 'Verified') {
      return <Outlet />; // Verified educator, allow access
    } else {
      // Not verified, redirect to status page
      return <Navigate to="/pending-verification" replace />;
    }
  }
  
  // This handles the case for the /pending-verification page itself.
  // A verified educator shouldn't be on the pending page.
  if (role === 'educator' && !requireVerified && verificationStatus === 'Verified' && location.pathname === '/pending-verification') {
      return <Navigate to="/instructor-dashboard" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
