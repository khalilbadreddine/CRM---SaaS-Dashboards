import { useState, useEffect } from "react";
import Filter from "./Dashboard-Components/Filters";
import Header from "./Dashboard-Components/Header";
import MonthlyMentors from "./Dashboard-Components/MonthlyMentors";
import MentorCard from "./Dashboard-Components/MentorCard";

function Mentors() {
  const [mentors, setMentors] = useState([]);
  const [filteredMentors, setFilteredMentors] = useState([]);
  // eslint-disable-next-line no-unused-vars
  const [filter, setFilter] = useState({
    searchTerm: "",
    selectedCategory: "All",
    reviewOrder: "None",
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
        setFilteredMentors(data); // Set initial filtered mentors for grid
      } catch (error) {
        console.error("Error fetching mentors", error);
      }
    };

    fetchMentors();
  }, []);

  const handleFilterChange = (newFilter) => {
    setFilter(newFilter);
    applyFilter(newFilter);
  };

  const applyFilter = (filter) => {
    let filtered = mentors.filter((mentor) => {
      const matchesSearch = mentor.name
        .toLowerCase()
        .includes(filter.searchTerm.toLowerCase());
      const matchesCategory =
        filter.selectedCategory === "All" ||
        mentor.expertise === filter.selectedCategory;

      return matchesSearch && matchesCategory;
    });

    // Apply sorting based on review order
    if (filter.reviewOrder === "Highest") {
      filtered = filtered.sort((a, b) => b.reviewsNumber - a.reviewsNumber);
    } else if (filter.reviewOrder === "Lowest") {
      filtered = filtered.sort((a, b) => a.reviewsNumber - b.reviewsNumber);
    }

    setFilteredMentors(filtered);
  };

  return (
    <div className="w-full h-fit p-4 space-y-2 bg-white">
      {/* Header Section */}
      <header className="text-white p-6 rounded-lg shadow bg-[#EBEDF7]">
        <Header />
      </header>

      {/* Search + Filter Section */}
      <div className="bg-[#EBEDF7] w-full rounded-lg p-2 shadow flex flex-col md:flex-row items-center md:items-start md:space-x-4 justify-between">
        <Filter
          onFilterChange={handleFilterChange}
          showDurationFilter={false}
        />
      </div>

      {/* Monthly Mentors Swiper Section */}
      <section className="bg-[#EBEDF7] p-4 rounded-lg w-full">
        <MonthlyMentors mentors={mentors.slice(0, 5)} />{" "}
        {/* No filter applied */}
      </section>

      {/* Mentors Grid Section */}
      <div className="bg-[#EBEDF7] p-4 rounded-lg grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredMentors.map((mentor) => (
          <MentorCard key={mentor._id} mentor={mentor} />
        ))}
      </div>
    </div>
  );
}

export default Mentors;
