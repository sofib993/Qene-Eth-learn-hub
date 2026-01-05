import React from 'react';
import Sidebar from '@/components/instructor/Sidebar';

const Dashboard: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8">Dashboard</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Courses</h2>
            <p className="text-4xl font-bold text-teal-500">12</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Total Students</h2>
            <p className="text-4xl font-bold text-teal-500">1,250</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold mb-2">Monthly Earnings</h2>
            <p className="text-4xl font-bold text-teal-500">ETB 25,000</p>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
