import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { CheckCircle, Film, BarChart2 } from 'lucide-react';

export default function Welcome() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg text-center">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Become a Qene Instructor</h1>
        <p className="text-gray-600 mb-8 text-lg">
          Share your expertise, connect with learners across Ethiopia, and build your brand.
          We provide the tools and platform to help you succeed.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left my-10">
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
            <CheckCircle className="w-10 h-10 text-teal-500 mb-3" />
            <h3 className="font-semibold text-lg">Get Verified</h3>
            <p className="text-sm text-gray-500 text-center">A quick process to ensure quality and trust on our platform.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
            <Film className="w-10 h-10 text-teal-500 mb-3" />
            <h3 className="font-semibold text-lg">Build Your Course</h3>
            <p className="text-sm text-gray-500 text-center">Our tools make it easy to upload videos, create quizzes, and structure your content.</p>
          </div>
          <div className="flex flex-col items-center p-4 bg-gray-100 rounded-lg">
            <BarChart2 className="w-10 h-10 text-teal-500 mb-3" />
            <h3 className="font-semibold text-lg">Set Your Price</h3>
            <p className="text-sm text-gray-500 text-center">You control the price and access duration for your valuable content.</p>
          </div>
        </div>

        <p className="text-sm text-gray-500 mb-8">Our team will review your submission to ensure it meets our quality standards before it goes live.</p>

        <Link to="/instructor-onboarding/verification">
          <Button size="lg" className="w-full md:w-auto bg-teal-500 hover:bg-teal-600 text-white">
            Get Started
          </Button>
        </Link>
      </div>
       <Link to="/" className="mt-8 text-sm text-gray-600 hover:text-teal-500">Back to Home</Link>
    </div>
  );
}