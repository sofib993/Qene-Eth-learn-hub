
import { Link } from "react-router-dom";
import { instructors } from "@/lib/data";

export const CourseCard = ({ course }) => {
  const instructor = instructors.find((i) => i.id === course.instructorId);

  return (
    <Link to={`/courses/${course.id}`} className="block group">
      <div className="overflow-hidden rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out bg-white">
        <img
          src={course.imageUrl}
          alt={course.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300 ease-in-out"
        />
        <div className="p-4">
          <p className="text-sm text-gray-500">{course.category}</p>
          <h3 className="text-lg font-semibold text-gray-800 mt-1 truncate group-hover:text-teal-600">{course.title}</h3>
          <p className="text-sm text-gray-600 mt-2">By {instructor?.name}</p>
          <p className="text-lg font-bold text-teal-600 mt-4">{course.price.toLocaleString()} ETB</p>
        </div>
      </div>
    </Link>
  );
};

export default CourseCard;
