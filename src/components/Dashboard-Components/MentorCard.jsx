// MentorCard.jsx
import { FiStar } from "react-icons/fi";
import PropTypes from "prop-types";

function MentorCard({ mentor }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow-lg w-[250px] flex flex-col justify-between ">
      <div className="flex justify-between items-start mb-3">
        <div className="flex items-center">
          <img
            src={mentor.profilePic}
            alt="mentor"
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div className="w-[120px]">
            <h3 className="text-base sm:text-sm font-semibold text-black truncate">
              {mentor.name}
            </h3>
            <p className="text-sm sm:text-xs text-gray-500 truncate">
              {mentor.expertise}
            </p>
          </div>
        </div>
        <button className="text-sm sm:text-xs font-medium text-blue-600 whitespace-nowrap">
          {mentor.isFollowed ? "Followed" : "+ Follow"}
        </button>
      </div>
      <div className="flex items-center text-gray-600 text-sm sm:text-xs mt-2">
        <div className="flex items-center mr-4">
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
              d="M9 12h6m2 0a2 2 0 100-4h-2a2 2 0 100 4H5a2 2 0 000 4h14a2 2 0 000-4z"
            />
          </svg>
          <span>{mentor.tasks.length} Task</span>
        </div>
        <div className="flex items-center">
          <FiStar className="text-yellow-500 mr-1" />
          <span>
            {mentor.rating} ({mentor.reviewsNumber} Reviews)
          </span>
        </div>
      </div>
    </div>
  );
}

MentorCard.propTypes = {
  mentor: PropTypes.shape({
    _id: PropTypes.string,
    profilePic: PropTypes.string,
    name: PropTypes.string,
    expertise: PropTypes.string,
    isFollowed: PropTypes.bool,
    tasks: PropTypes.array,
    rating: PropTypes.number,
    reviewsNumber: PropTypes.number,
  }).isRequired,
};

export default MentorCard;
