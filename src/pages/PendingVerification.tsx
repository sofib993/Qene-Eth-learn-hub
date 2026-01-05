import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useEffect } from 'react';
import { Hourglass, CheckCircle, XCircle } from 'lucide-react';

const PendingVerification = () => {
  const { verificationStatus, updateVerificationStatus, role } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (role === 'educator' && verificationStatus === 'Verified') {
      navigate('/instructor-dashboard');
    }
  }, [verificationStatus, role, navigate]);

  const handleResubmit = () => {
    updateVerificationStatus('Pending');
    navigate('/educator-onboarding/welcome');
  };

  // Mock controls for demonstration purposes
  const simulateVerification = () => updateVerificationStatus('Verified');
  const simulateRejection = () => updateVerificationStatus('Rejected');

  const renderContent = () => {
    switch (verificationStatus) {
      case 'Pending':
        return (
          <div className="text-center">
            <Hourglass className="w-16 h-16 mx-auto text-yellow-500 mb-4" />
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Application Pending</h1>
            <p className="text-gray-600 mb-8">Your application is currently under review. We'll notify you once a decision has been made. This usually takes 2-3 business days.</p>
          </div>
        );
      case 'Rejected':
        return (
          <div className="text-center">
            <XCircle className="w-16 h-16 mx-auto text-red-500 mb-4" />
            <h1 className="text-3xl font-bold text-red-600 mb-4">Application Rejected</h1>
            <p className="text-gray-600 mb-8">We're sorry, but we couldn't approve your application at this time. You can review and resubmit your information.</p>
            <Button onClick={handleResubmit}>Resubmit Application</Button>
          </div>
        );
      case 'Verified': // Should be redirected, but as a fallback:
        return (
            <div className="text-center">
                <CheckCircle className="w-16 h-16 mx-auto text-green-500 mb-4" />
                <h1 className="text-3xl font-bold text-gray-800 mb-4">Application Verified!</h1>
                <p className="text-gray-600 mb-8">Redirecting you to your dashboard...</p>
            </div>
        )
      default:
        return (
          <div className="text-center">
            <h1 className="text-3xl font-bold text-gray-800 mb-4">Loading Status...</h1>
            <p className="text-gray-600">Please wait while we fetch your verification status.</p>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        {renderContent()}
        {/* DEV ONLY: Mock controls to simulate status change */}
        <div className="mt-8 pt-4 border-t border-dashed">
            <p className="text-center text-sm font-medium text-gray-500 mb-4">For Demonstration Only</p>
            <div className="flex justify-center gap-4">
                <Button variant="outline" size="sm" onClick={simulateVerification}>Simulate Approval</Button>
                <Button variant="destructive" size="sm" onClick={simulateRejection}>Simulate Rejection</Button>
            </div>
        </div>
      </div>
    </div>
  );
};

export default PendingVerification;
