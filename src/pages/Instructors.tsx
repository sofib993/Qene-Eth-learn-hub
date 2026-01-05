
import { Link } from "react-router-dom";
import { instructors } from "@/lib/data";
import { Star, Users, BookOpen } from "lucide-react";

const Instructors = () => {
  return (
    <div className="bg-gray-50">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold">Our World-Class Instructors</h1>
          <p className="text-lg text-gray-600 mt-2">Learn from the best minds in the industry.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {instructors.map((instructor) => (
            <Link to={`/instructors/${instructor.id}`} key={instructor.id} className="block group">
              <div className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-xl transition-shadow duration-300 h-full flex flex-col items-center">
                <img
                  src={instructor.avatarUrl}
                  alt={instructor.name}
                  className="w-32 h-32 rounded-full mx-auto shadow-lg group-hover:ring-4 group-hover:ring-teal-200 transition-all duration-300"
                />
                <h2 className="text-2xl font-bold mt-4 group-hover:text-teal-600">{instructor.name}</h2>
                <p className="text-gray-600 mt-2 flex-grow">{instructor.bio}</p>
                <div className="flex items-center justify-center space-x-6 text-gray-600 mt-4 pt-4 border-t w-full">
                    <div className="flex items-center space-x-1">
                        <Star className="w-5 h-5 text-yellow-500" /> <span>{instructor.rating}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <Users className="w-5 h-5 text-blue-500" /> <span>{instructor.studentCount.toLocaleString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                        <BookOpen className="w-5 h-5 text-green-500" /> <span>{instructor.courseCount}</span>
                    </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Instructors;
