import React from 'react';
import Sidebar from '@/components/instructor/Sidebar';
import CourseList from '@/components/instructor/CourseList';
import { publishedCourses, draftCourses } from '@/lib/instructor-data';

const Courses: React.FC = () => {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-8">
        <h1 className="text-3xl font-bold mb-8">My Courses</h1>
        <div className="space-y-12">
          <CourseList title="Published Courses" courses={publishedCourses} />
          <CourseList title="Draft Courses" courses={draftCourses} />
        </div>
      </main>
    </div>
  );
};

export default Courses;
