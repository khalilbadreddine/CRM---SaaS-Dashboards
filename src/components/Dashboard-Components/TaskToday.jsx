// TaskToday.jsx
import PropTypes from "prop-types";

function TaskToday({ selectedCourse }) {
  return (
    <div className=" text-white p-6 rounded-lg shadow-lg relative mb-4  bg-black bg-opacity-40 backdrop-filter backdrop-blur-lg">
      <div className="flex items-center justify-between mb-2">
        <h3 className="font-semibold text-white">Task Today</h3>
        <button className="text-white">...</button>
      </div>
      {selectedCourse ? (
        <>
          <img
            src={selectedCourse.picture}
            alt="course"
            className="w-full h-40 sm:h-48 md:h-56 rounded-lg object-cover mb-4"
          />
          <div className="mb-4">
            <h4 className="text-lg sm:text-xl font-semibold  mb-1">
              {selectedCourse.title}
            </h4>
            <p className="text-sm sm:text-base ">UI/UX Designer</p>
          </div>
          <div className="flex items-center mb-4">
            <span className="text-sm  mr-2">Progress</span>
            <div className="flex-1 h-2  rounded-full overflow-hidden">
              <div className="bg-blue-500 h-full" style={{ width: "90%" }} />
            </div>
            <span className="text-sm text-white ml-2">90%</span>
          </div>
          <div className="flex items-center justify-between text-sm text-white mb-4">
            <p>{selectedCourse.duration}</p>
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, index) => (
                <img
                  key={index}
                  src={`https://randomuser.me/api/portraits/thumb/men/${
                    index + 1
                  }.jpg`}
                  alt="member"
                  className="w-6 h-6 rounded-full border-2 border-white"
                />
              ))}
            </div>
          </div>
        </>
      ) : (
        <p>Select a course to see the details</p>
      )}
    </div>
  );
}

TaskToday.propTypes = {
  selectedCourse: PropTypes.shape({
    picture: PropTypes.string,
    title: PropTypes.string,
    duration: PropTypes.string,
  }),
};

export default TaskToday;
