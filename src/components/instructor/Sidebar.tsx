import React from 'react';
import { NavLink } from 'react-router-dom';
import { Home, Book, PlusCircle } from 'lucide-react';

const Sidebar: React.FC = () => {
  const navLinkClasses = 'flex items-center px-4 py-3 text-gray-700 rounded-lg hover:bg-gray-200';
  const activeLinkClasses = 'bg-teal-100 text-teal-600';

  return (
    <aside className="w-64 bg-white p-4 border-r border-gray-200 min-h-screen">
      <div className="flex items-center justify-center mb-10">
         <h1 className="text-2xl font-bold text-gray-800">Instructor</h1>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/instructor/dashboard" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <Home className="w-5 h-5 mr-3" />
              Dashboard
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="/instructor/courses" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <Book className="w-5 h-5 mr-3" />
              My Courses
            </NavLink>
          </li>
          <li className="mt-2">
            <NavLink to="/instructor/create-course" className={({ isActive }) => `${navLinkClasses} ${isActive ? activeLinkClasses : ''}`}>
              <PlusCircle className="w-5 h-5 mr-3" />
              Create Course
            </NavLink>
          </li>
        </ul>
      </nav>
    </aside>
  );
};

export default Sidebar;
