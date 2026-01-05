import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import { CheckCircle } from 'lucide-react';

const EducatorConfirmation = () => {
  const navigate = useNavigate();
  const { updateVerificationStatus } = useAuth();

  useEffect(() => {
    // Set status to pending when the educator reaches this confirmation page
    updateVerificationStatus('Pending');

    const timer = setTimeout(() => {
      navigate('/pending-verification');
    }, 3000); // Redirect after 3 seconds

    return () => clearTimeout(timer);
  }, [navigate, updateVerificationStatus]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full text-center bg-white p-8 rounded-lg shadow-md">
        <CheckCircle className="w-16 h-16 mx-auto text-teal-500 mb-4" />
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Submission Complete!</h1>
        <p className="text-gray-600">
          Thank you for submitting your information. Your application is now under review.
        </p>
        <p className="text-gray-600 mt-4">You will be redirected to your status page shortly.</p>
      </div>
    </div>
  );
};

export default EducatorConfirmation;
