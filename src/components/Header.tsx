import { Link } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { Button } from './ui/button';

const Header = () => {
  const { user, logout } = useAuth();

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-3 flex justify-between items-center">
        <div className="flex items-center">
          {/* This space can be used for a logo or brand name if it's on the left */}
        </div>
        <div className="flex items-center justify-center flex-1">
            <Link to="/home" className="text-2xl font-bold text-gray-800">Qene</Link>
            <div className="hidden md:flex items-center space-x-6 ml-10">
                <Link to="/home" className="text-gray-600 hover:text-teal-500">Home</Link>
                <Link to="/courses" className="text-gray-600 hover:text-teal-500">Courses</Link>
                <Link to="/instructors" className="text-gray-600 hover:text-teal-500">Instructors</Link>
            </div>
        </div>
        <div className="flex items-center">
          {user ? (
            <div className="flex items-center space-x-4">
              <span className="hidden sm:inline">Welcome, {user.name}!</span>
              <Button onClick={logout} variant="outline">Logout</Button>
            </div>
          ) : (
            <div className="flex items-center space-x-2">
              <Button asChild variant="outline">
                <Link to="/">Login</Link>
              </Button>
              <Button asChild>
                <Link to="/">Sign Up</Link>
              </Button>
            </div>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Header;
