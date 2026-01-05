
import { Link } from "react-router-dom";
import { CourseCard } from "@/components/CourseCard";
import { courses, instructors } from "@/lib/data";
import Search from "@/components/Search";

const Home = () => {
  const featuredCourses = courses.slice(0, 4);
  const featuredInstructors = instructors.slice(0, 4);

  return (
    <div className="bg-gray-50 text-gray-800">
      {/* Hero Section */}
      <section className="text-center py-20 bg-white">
        <h1 className="text-5xl font-bold text-teal-600">Qene</h1>
        <h2 className="text-4xl font-bold mt-4">Unlock Your Potential with African-Led Courses</h2>
        <p className="text-xl mt-4 max-w-2xl mx-auto text-gray-600">
          Discover expert-led courses in tech and design, tailored for the African market.
        </p>
        <div className="mt-8 flex justify-center">
          <Search />
        </div>
      </section>

      {/* Featured Courses */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {featuredCourses.map((course) => (
              <CourseCard key={course.id} course={course} />
            ))}
          </div>
          <div className="text-center mt-12">
            <Link to="/courses" className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors">
              View All Courses
            </Link>
          </div>
        </div>
      </section>

      {/* Meet Our Instructors */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Meet Our Instructors</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            {featuredInstructors.map((instructor) => (
              <Link to={`/instructors/${instructor.id}`} key={instructor.id} className="group">
                <img
                  src={instructor.avatarUrl}
                  alt={instructor.name}
                  className="w-32 h-32 rounded-full mx-auto shadow-lg group-hover:shadow-xl transition-shadow duration-300"
                />
                <h3 className="mt-4 text-xl font-semibold group-hover:text-teal-600">{instructor.name}</h3>
                <p className="mt-1 text-gray-600">{instructor.bio.substring(0, 50)}...</p>
              </Link>
            ))}
          </div>
           <div className="text-center mt-12">
            <Link to="/instructors" className="bg-teal-600 text-white font-bold py-3 px-8 rounded-lg hover:bg-teal-700 transition-colors">
              Browse All Instructors
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
