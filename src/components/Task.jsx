import { useState, useEffect } from "react";
import Filter from "./Dashboard-Components/Filters";
import Header from "./Dashboard-Components/Header";
import CourseCard from "./Dashboard-Components/CourseCard";

function Task() {
  const [mentors, setMentors] = useState([]);
  const [filter, setFilter] = useState({
    searchTerm: "",
    selectedCategory: "All",
    selectedDuration: "All",
  });

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/mentors");
        if (!response.ok) {
          throw new Error("Failed to fetch mentors");
        }
        const data = await response.json();
        setMentors(data);
      } catch (error) {
        console.error("Error fetching mentors", error);
      }
    };

    fetchMentors();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
  };

  const filteredCourses = mentors
    .flatMap((mentor) => mentor.courses)
    .filter((course) => {
      const matchesSearch = course.title
        .toLowerCase()
        .includes(filter.searchTerm.toLowerCase());
      const matchesCategory =
        filter.selectedCategory === "All" ||
        course.category === filter.selectedCategory;
      const matchesDuration =
        filter.selectedDuration === "All" ||
        course.duration === filter.selectedDuration;
      return matchesSearch && matchesCategory && matchesDuration;
    });

  return (
    <div className="w-full h-fit p-4 space-y-2 ">
      {/* Header Section */}
      <header className="text-white p-6 rounded-lg shadow bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg">
        <Header />
      </header>

      {/* Search + Filter Section */}
      <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg w-full rounded-lg p-2 shadow flex flex-col md:flex-row items-center md:items-start md:space-x-4 justify-between">
        <Filter onFilterChange={handleFilterChange} showDurationFilter={true} />
      </div>

      {/* Courses Grid Section */}
      <div className="bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg p-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredCourses.map((course) => (
          <CourseCard key={course.courseId} course={course} />
        ))}
      </div>
    </div>
  );
}

export default Task;
