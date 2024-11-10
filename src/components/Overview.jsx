// Overview.jsx
import { useEffect, useState } from "react";
import Header from "./Dashboard-Components/Header";
import Calendar from "./Dashboard-Components/Calendar";
import RunningTaskCard from "./Dashboard-Components/RunningTaskCard";
import ActivityChart from "./Dashboard-Components/ActivityChart";
import MonthlyMentors from "./Dashboard-Components/MonthlyMentors";
import FeaturedCourses from "./Dashboard-Components/FeaturedCourses";
import TaskToday from "./Dashboard-Components/TaskToday";
import DetailTask from "./Dashboard-Components/DetailTask";

function Overview() {
  const [mentors, setMentors] = useState([]);
  const [selectedPeriod, setSelectedPeriod] = useState("This Week");
  const [selectedCourse, setSelectedCourse] = useState(null);

  useEffect(() => {
    const fetchMentors = async () => {
      try {
        const response = await fetch("http://localhost:8000/api/mentors");
        if (!response.ok) {
          throw new Error("Failed to fetch mentors");
        }
        const data = await response.json();
        setMentors(data);
        // Set the default course if available
        if (data.length > 0 && data[0].courses.length > 0) {
          setSelectedCourse(data[0].courses[0]);
        }
      } catch (error) {
        console.error("Error fetching mentors", error);
      }
    };

    fetchMentors();
  }, []);

  return (
    <div className="w-full h-fit flex flex-col lg:flex-row p-2 bg-white lg:space-y-0 lg:space-x-4 ">
      <div className="flex flex-col w-full lg:w-2/3 space-y-4  rounded-lg shadow-lg p-4 ">
        <div className="bg-[#EBEDF7] h-auto p-4 rounded-lg shadow-md w-full flex items-center justify-center text-white font-bold">
          <Header />
        </div>

        <div className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-4">
          <div className="bg-[#EBEDF7] h-auto p-4 rounded-lg shadow-md lg:w-1/3 w-full flex items-center justify-center text-white font-bold">
            <RunningTaskCard />
          </div>
          <div className="bg-[#EBEDF7] h-auto p-4 rounded-lg shadow-md lg:w-2/3 w-full flex items-center justify-center text-white font-bold">
            <ActivityChart
              selectedPeriod={selectedPeriod}
              setSelectedPeriod={setSelectedPeriod}
            />
          </div>
        </div>

        <div className="w-full h-auto rounded-lg shadow-md  flex items-center justify-center text-white font-bold">
          <MonthlyMentors mentors={mentors} />
        </div>

        <div className="bg-[#EBEDF7] h-auto  rounded-lg shadow-md w-full flex items-center justify-center text-white font-bold">
          <FeaturedCourses
            mentors={mentors}
            setSelectedCourse={setSelectedCourse}
          />
        </div>
      </div>

      <div className="w-full lg:w-1/3 flex flex-col space-y-4 bg-white rounded-lg shadow-lg p-4">
        <div className="bg-[#EBEDF7] h-auto p-2 rounded-lg shadow-md w-full flex items-center justify-center text-gray-700 font-bold">
          <Calendar />
        </div>

        <div className="bg-[#EBEDF7] flex flex-col h-auto p-4 rounded-lg shadow-md w-full items-center justify-center text-white font-bold">
          <TaskToday selectedCourse={selectedCourse} />
          <DetailTask selectedCourse={selectedCourse} />
        </div>
      </div>
    </div>
  );
}

export default Overview;
