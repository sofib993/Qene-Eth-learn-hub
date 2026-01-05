import { Link } from 'react-router-dom';
import { ArrowRight, BookOpen, UserPlus } from 'lucide-react';

const EntryGate = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 p-4 font-sans">
      <div className="text-center mb-12">
        <h1 className="text-5xl font-bold text-gray-800 mb-3">Welcome to Jifunze</h1>
        <p className="text-xl text-gray-600">Your Digital Hub for Learning and Teaching</p>
      </div>

      <div className="w-full max-w-4xl grid md:grid-cols-2 gap-8">
        {/* Learner Card */}
        <Link
          to="/auth?role=learner"
          className="group flex flex-col text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-transparent hover:border-teal-500"
        >
          <div className="flex justify-center mb-4">
            <BookOpen className="w-16 h-16 text-teal-500" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">I am a Learner</h2>
          <p className="text-gray-600 text-base mb-6">Explore courses, gain new skills, and unlock your potential.</p>
          <div className="mt-auto flex items-center justify-center text-teal-600 font-bold text-lg">
            Start Learning
            <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1.5 transition-transform" />
          </div>
        </Link>

        {/* Educator Card */}
        <Link
          to="/educator-onboarding/welcome"
          className="group flex flex-col text-center p-8 bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border-t-4 border-transparent hover:border-purple-500"
        >
          <div className="flex justify-center mb-4">
            <UserPlus className="w-16 h-16 text-purple-500" strokeWidth={1.5} />
          </div>
          <h2 className="text-3xl font-semibold text-gray-900 mb-2">I am an Educator</h2>
          <p className="text-gray-600 text-base mb-6">Share your expertise, empower students, and build your brand.</p>
          <div className="mt-auto flex items-center justify-center text-purple-600 font-bold text-lg">
            Start Teaching
            <ArrowRight className="ml-2 h-6 w-6 transform group-hover:translate-x-1.5 transition-transform" />
          </div>
        </Link>
      </div>
       <div className="absolute bottom-6 text-center">
          <p className="text-sm text-gray-500">© {new Date().getFullYear()} Jifunze | Empowering Minds</p>
      </div>
    </div>
  );
};

export default EntryGate;