
import { useParams, Link } from "react-router-dom";
import { instructors, courses } from "@/lib/data";
import { CourseCard } from "@/components/CourseCard";
import { Star, Users, BookOpen } from "lucide-react";

const InstructorDetail = () => {
  const { id } = useParams();
  const instructor = instructors.find((i) => i.id === Number(id));
  const instructorCourses = courses.filter((c) => c.instructorId === Number(id));

  if (!instructor) {
    return (
      <div className="text-center py-20">
        <h1 className="text-3xl font-bold">Instructor not found</h1>
        <Link to="/instructors" className="text-teal-600 hover:underline mt-4 inline-block">Back to Instructors</Link>
      </div>
    );
  }

  return (
    <div className="bg-white">
      {/* Instructor Profile Header */}
      <header className="bg-teal-600 text-white">
        <div className="container mx-auto px-4 py-16 text-center">
          <img src={instructor.avatarUrl} alt={instructor.name} className="w-40 h-40 rounded-full mx-auto ring-4 ring-white shadow-xl -mb-20" />
        </div>
      </header>

      <div className="pt-24 pb-12">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold">{instructor.name}</h1>
            <p className="text-lg text-gray-600 mt-4">{instructor.bio}</p>
            <div className="flex items-center justify-center space-x-8 text-gray-700 mt-6 border-t border-b py-4">
                <div className="flex items-center space-x-2">
                    <Star className="w-6 h-6 text-yellow-500" /> 
                    <span className="text-lg font-semibold">{instructor.rating} Rating</span>
                </div>
                <div className="flex items-center space-x-2">
                    <Users className="w-6 h-6 text-blue-500" /> 
                    <span className="text-lg font-semibold">{instructor.studentCount.toLocaleString()} Students</span>
                </div>
                <div className="flex items-center space-x-2">
                    <BookOpen className="w-6 h-6 text-green-500" /> 
                    <span className="text-lg font-semibold">{instructor.courseCount} Courses</span>
                </div>
            </div>
          </div>

          {/* Courses by Instructor */}
          <div className="mt-16">
            <h2 className="text-3xl font-bold text-center mb-10">Courses by {instructor.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {instructorCourses.map((course) => (
                <CourseCard key={course.id} course={course} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InstructorDetail;
