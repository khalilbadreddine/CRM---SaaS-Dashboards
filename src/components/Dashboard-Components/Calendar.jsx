import { useState } from "react";
import dayjs from "dayjs";

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(dayjs()); // Current date for month/year display
  const [selectedDate, setSelectedDate] = useState(dayjs().date()); // Default to current day

  // Get the current week (Sunday to Saturday)
  const startOfWeek = currentDate.startOf("week");
  const daysOfWeek = Array(7)
    .fill(null)
    .map((_, index) => startOfWeek.add(index, "day"));

  // Move to previous week
  const handlePrevWeek = () => {
    setCurrentDate(currentDate.subtract(1, "week"));
  };

  // Move to next week
  const handleNextWeek = () => {
    setCurrentDate(currentDate.add(1, "week"));
  };

  // Handle date selection
  const handleDateClick = (date) => {
    setSelectedDate(date.date());
  };

  return (
    <div className="max-w-xs w-full mx-auto p-4 rounded-lg bg-gray-50 shadow-md">
      <div className="flex justify-between items-center text-gray-700 mb-4">
        <button
          onClick={handlePrevWeek}
          className="text-2xl text-gray-400 hover:text-gray-600"
        >
          {"<"}
        </button>
        <span className="font-semibold">{currentDate.format("MMMM YYYY")}</span>
        <button
          onClick={handleNextWeek}
          className="text-2xl text-gray-400 hover:text-gray-600"
        >
          {">"}
        </button>
      </div>
      <div className="grid grid-cols-7 gap-2">
        {daysOfWeek.map((date) => (
          <div
            key={date.format("D")}
            onClick={() => handleDateClick(date)}
            className={`flex flex-col items-center justify-center w-full h-20 cursor-pointer transition-transform transform hover:scale-105 ${
              selectedDate === date.date()
                ? "bg-black text-white rounded-xl"
                : "text-gray-700 hover:bg-gray-200 rounded-xl"
            }`}
          >
            <span className="text-xs text-gray-400">
              {date.format("dd").charAt(0)}
            </span>
            <div
              className={`w-10 h-10 flex items-center justify-center rounded-full ${
                selectedDate === date.date() ? "bg-blue-500 text-white" : ""
              }`}
            >
              {date.date()}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Calendar;
