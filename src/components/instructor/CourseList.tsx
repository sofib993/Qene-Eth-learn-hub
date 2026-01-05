import React from 'react';
import { Course } from '@/lib/instructor-data';
import { MoreVertical } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';

interface CourseListProps {
  title: string;
  courses: Course[];
}

const CourseList: React.FC<CourseListProps> = ({ title, courses }) => {
  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">{title}</h2>
      <div className="bg-white rounded-lg shadow-md">
        <ul className="divide-y divide-gray-200">
          {courses.map((course) => (
            <li key={course.id} className="p-4 flex items-center justify-between hover:bg-gray-50">
              <div className="flex items-center">
                <img src={course.thumbnailUrl} alt={course.title} className="w-24 h-16 object-cover rounded-md mr-4" />
                <div>
                  <h3 className="font-semibold text-lg">{course.title}</h3>
                  <p className="text-gray-600">{course.students} students</p>
                  <p className="text-gray-800 font-bold">ETB {course.price}</p>
                </div>
              </div>
              <div className="flex items-center space-x-4">
                <span className={`px-3 py-1 text-sm font-semibold rounded-full ${course.status === 'Published' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'}`}>
                  {course.status}
                </span>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="h-8 w-8 p-0">
                      <MoreVertical className="h-4 w-4" />
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end">
                    <DropdownMenuItem>Edit</DropdownMenuItem>
                    <DropdownMenuItem>View as Student</DropdownMenuItem>
                    <DropdownMenuItem className="text-red-500">Delete</DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default CourseList;
