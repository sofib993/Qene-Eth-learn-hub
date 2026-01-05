import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useAuth } from '@/hooks/useAuth';
import { useEffect } from 'react';

const EducatorWelcome = () => {
  const { role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    // if a non-educator lands here, redirect them.
    if (role && role !== 'educator') {
      navigate('/home');
    }
  }, [role, navigate]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 p-4">
      <div className="max-w-lg w-full text-center bg-white p-8 rounded-lg shadow-md">
        <h1 className="text-3xl font-bold text-gray-800 mb-4">Welcome to the Qene Educator Community!</h1>
        <p className="text-gray-600 mb-8">
          We're excited to have you. To get started, you'll need to complete our onboarding process to verify your identity and qualifications. This helps us maintain a high-quality learning environment for everyone.
        </p>
        <Button asChild size="lg">
          <Link to="/educator-onboarding/personal-info">Start Onboarding</Link>
        </Button>
      </div>
    </div>
  );
};

export default EducatorWelcome;
