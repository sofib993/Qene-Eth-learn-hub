import { useSearchParams, Navigate } from 'react-router-dom';
import Login from '@/components/Login';
import Signup from '@/components/Signup';
import { useState } from 'react';
import { UserRole } from '@/contexts/AuthContext';
import { useAuth } from '@/hooks/useAuth';

const AuthPage = () => {
  const [searchParams] = useSearchParams();
  const role = searchParams.get('role') as UserRole;
  const [isLoginView, setIsLoginView] = useState(true);
  const { isAuthenticated, userRole } = useAuth();

  if (!role || !['learner', 'educator', 'admin'].includes(role)) {
    return <Navigate to="/" />;
  }

  if (isAuthenticated) {
    if (userRole === 'learner') return <Navigate to="/" />;
    if (userRole === 'educator') return <Navigate to="/instructor-onboarding/welcome" />;
    if (userRole === 'admin') return <Navigate to="/admin" />;
  }

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col justify-center items-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <h2 className="mt-6 text-center text-3xl font-extrabold text-gray-900">
          {isLoginView ? `Sign in as a ${role}` : `Sign up as a ${role}`}
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
          {isLoginView ? <Login role={role} /> : <Signup role={role} />}
          <div className="mt-6">
            <p className="text-center text-sm text-gray-600">
              {isLoginView ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => setIsLoginView(!isLoginView)}
                className="font-medium text-teal-600 hover:text-teal-500 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
              >
                {isLoginView ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;