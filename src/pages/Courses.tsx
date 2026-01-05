import { useState, useMemo } from "react";
import { useSearchParams } from "react-router-dom";
import { CourseCard } from "@/components/CourseCard";
import { courses, instructors, categories } from "@/lib/data";
import Search from "@/components/Search";

const Courses = () => {
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState(searchParams.get("q") || "");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedInstructor, setSelectedInstructor] = useState("all");
  const [maxPrice, setMaxPrice] = useState(6000);

  const filteredCourses = useMemo(() => {
    return courses.filter((course) => {
      const matchesSearch = course.title.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "all" || course.categoryId === Number(selectedCategory);
      const matchesInstructor = selectedInstructor === "all" || course.instructorId === Number(selectedInstructor);
      const matchesPrice = course.price <= maxPrice;
      return matchesSearch && matchesCategory && matchesInstructor && matchesPrice;
    });
  }, [searchTerm, selectedCategory, selectedInstructor, maxPrice]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold">Explore Our Courses</h1>
        <p className="text-lg text-gray-600 mt-2">Find the perfect course to advance your skills.</p>
      </div>

      <div className="flex flex-col md:flex-row gap-8">
        {/* Filters */}
        <aside className="w-full md:w-1/4 lg:w-1/5 bg-white p-6 rounded-lg shadow-md h-fit">
          <h2 className="text-xl font-bold mb-6">Filters</h2>
          
          <div className="mb-6">
             <Search onSearch={setSearchTerm} initialQuery={searchTerm} />
          </div>

          <div className="mb-6">
            <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-2">Category</label>
            <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500">
              <option value="all">All Categories</option>
              {categories.map(cat => <option key={cat.id} value={cat.id}>{cat.name}</option>)}
            </select>
          </div>

          <div className="mb-6">
            <label htmlFor="instructor" className="block text-sm font-medium text-gray-700 mb-2">Instructor</label>
            <select id="instructor" value={selectedInstructor} onChange={(e) => setSelectedInstructor(e.target.value)} className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring-teal-500 focus:border-teal-500">
              <option value="all">All Instructors</option>
              {instructors.map(inst => <option key={inst.id} value={inst.id}>{inst.name}</option>)}
            </select>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-2">Max Price (ETB)</label>
            <input type="range" id="price" min="0" max="6000" step="100" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-teal-600"/>
            <div className="text-center text-gray-600 mt-2 font-semibold">{maxPrice.toLocaleString()} ETB</div>
          </div>

        </aside>

        {/* Course Grid */}
        <main className="w-full md:w-3/4 lg:w-4/5">
          {filteredCourses.length > 0 ? (
             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCourses.map((course) => (
                  <CourseCard key={course.id} course={course} />
                ))}
              </div>
          ) : (
            <div className="text-center py-20 bg-white rounded-lg shadow-md">
                <h3 className="text-2xl font-semibold">No Courses Found</h3>
                <p className="text-gray-600 mt-2">Try adjusting your filters to find what you're looking for.</p>
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default Courses;
