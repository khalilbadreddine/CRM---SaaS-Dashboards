// DetailTask.jsx
import PropTypes from "prop-types";

function DetailTask({ selectedCourse }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="font-semibold text-gray-800 mb-4">Detail Task</h3>
      {selectedCourse ? (
        <>
          <ul className="space-y-2 text-gray-600 text-sm">
            {selectedCourse.lessons.map((lesson, index) => (
              <li
                key={lesson.lessonId}
                className="flex items-center bg-gray-100 p-2 rounded-lg"
              >
                <span className="mr-4 text-blue-600 font-semibold">
                  {index + 1}
                </span>
                <span>{lesson.title}</span>
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white w-full py-2 rounded-lg font-medium">
            Go To Detail
          </button>
        </>
      ) : (
        <p>Select a course to see the tasks</p>
      )}
    </div>
  );
}

DetailTask.propTypes = {
  selectedCourse: PropTypes.shape({
    lessons: PropTypes.arrayOf(
      PropTypes.shape({
        lessonId: PropTypes.string,
        title: PropTypes.string,
      })
    ),
  }),
};

export default DetailTask;
