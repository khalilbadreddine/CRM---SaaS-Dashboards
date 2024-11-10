import { useState, useEffect } from "react";
import PropTypes from "prop-types";

function Filter({ onFilterChange, showDurationFilter = true }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [reviewOrder, setReviewOrder] = useState("None"); // "None", "Highest", "Lowest"
  const [selectedDuration, setSelectedDuration] = useState("All");

  useEffect(() => {
    onFilterChange({
      searchTerm,
      selectedCategory,
      reviewOrder: showDurationFilter ? null : reviewOrder,
      selectedDuration: showDurationFilter ? selectedDuration : null,
    });
  }, [
    searchTerm,
    selectedCategory,
    reviewOrder,
    selectedDuration,
    showDurationFilter,
    onFilterChange,
  ]);

  return (
    <div className="w-full flex justify-between space-x-2">
      <input
        type="text"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="border p-2 rounded w-full"
      />

      <select
        value={selectedCategory}
        onChange={(e) => setSelectedCategory(e.target.value)}
        className="border p-2 rounded"
      >
        <option value="All">All Categories</option>
        <option value="Web Development">Web Development</option>
        <option value="Data Science">Data Science</option>
        <option value="AI and ML">AI and ML</option>
        <option value="Graphic Design">Graphic Design</option>
      </select>

      {showDurationFilter ? (
        <select
          value={selectedDuration}
          onChange={(e) => setSelectedDuration(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="All">All Durations</option>
          <option value="3 weeks">3 weeks</option>
          <option value="6 weeks">6 weeks</option>
          <option value="8 weeks">8 weeks</option>
          <option value="10 weeks">10 weeks</option>
        </select>
      ) : (
        <select
          value={reviewOrder}
          onChange={(e) => setReviewOrder(e.target.value)}
          className="border p-2 rounded"
        >
          <option value="None">No Order</option>
          <option value="Highest">Highest Reviews</option>
          <option value="Lowest">Lowest Reviews</option>
        </select>
      )}
    </div>
  );
}

Filter.propTypes = {
  onFilterChange: PropTypes.func.isRequired,
  showDurationFilter: PropTypes.bool,
};

export default Filter;
