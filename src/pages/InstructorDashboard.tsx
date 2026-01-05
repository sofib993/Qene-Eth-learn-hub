import { Navigate } from 'react-router-dom';

// This component now redirects to the new instructor dashboard layout.
const InstructorDashboardRedirect = () => {
  return <Navigate to="/instructor/dashboard" replace />;
};

export default InstructorDashboardRedirect;
