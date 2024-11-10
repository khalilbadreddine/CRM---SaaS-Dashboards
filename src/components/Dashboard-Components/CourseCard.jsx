// CourseCard.jsx
import PropTypes from "prop-types";

function CourseCard({ course, index }) {
  const backgroundColors = ["#fff"];
  const backgroundColor = backgroundColors[index % backgroundColors.length];

  return (
    <div
      className="bg-white p-4 rounded-lg shadow-lg w-[250px] flex flex-col justify-between"
      style={{ backgroundColor }}
    >
      <img
        src={course.picture}
        alt="course"
        className="w-full h-32 rounded-lg object-cover mb-3"
      />
      <div className="mb-3">
        <h3 className="text-base sm:text-sm font-semibold text-black truncate">
          {course.title}
        </h3>
        <p className="text-sm sm:text-xs text-gray-500 truncate">
          {course.category}
        </p>
      </div>
      <p className="text-gray-700 text-sm mb-2 line-clamp-2">
        {course.description}
      </p>
      <div className="flex items-center justify-between text-gray-600 text-sm">
        <span>{course.duration}</span>
        <div className="flex items-center">
          <svg
            className="w-4 h-4 sm:w-3.5 sm:h-3.5 text-gray-500 mr-1"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 13l4 4L19 7"
            />
          </svg>
          <span>{course.enrollmentNumber} Enrolled</span>
        </div>
      </div>
    </div>
  );
}

CourseCard.propTypes = {
  course: PropTypes.shape({
    courseId: PropTypes.string,
    picture: PropTypes.string,
    title: PropTypes.string,
    category: PropTypes.string,
    description: PropTypes.string,
    duration: PropTypes.string,
    enrollmentNumber: PropTypes.number,
  }).isRequired,
  index: PropTypes.number.isRequired,
};

export default CourseCard;
