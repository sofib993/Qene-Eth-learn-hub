import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Check, Mail } from 'lucide-react';

export default function Confirmation() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4 text-center">
      <div className="max-w-md w-full bg-white p-8 rounded-xl shadow-lg">
        <div className="mx-auto flex items-center justify-center h-16 w-16 rounded-full bg-green-100 mb-5">
          <Check className="h-8 w-8 text-green-600" />
        </div>
        <h1 className="text-2xl font-bold text-gray-800 mb-2">Submission Received!</h1>
        <p className="text-gray-600 mb-6">
          Thank you for submitting your course. Our review team will now assess your content and credentials to ensure it meets our quality standards.
        </p>
        <div className="bg-blue-50 p-4 rounded-lg text-left flex items-start gap-3">
            <Mail className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0"/>
            <div>
                <h3 className="font-semibold text-blue-800">What's Next?</h3>
                <p className="text-sm text-blue-700">
                You will receive an email at your registered address within <strong>3-5 business days</strong> with the status of your submission. If approved, your course will be published on the Qene platform.
                </p>
            </div>
        </div>
      </div>
      <Link to="/">
          <Button variant="outline" className="mt-8">Go to Homepage</Button>
      </Link>
    </div>
  );
}