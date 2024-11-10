import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { useEffect } from "react";
import { motion, useMotionValue, useTransform } from "framer-motion";

function RunningTaskCard() {
  const targetPercentage = 45;

  // Create a motion value for the percentage
  const progressValue = useMotionValue();

  // Create a transform that rounds the motion value for display
  const animatedPercentage = useTransform(progressValue, (value) =>
    Math.round(value)
  );

  useEffect(() => {
    // Animate the motion value to the target percentage
    progressValue.set(targetPercentage);
  }, [targetPercentage, progressValue]);

  return (
    <div className="bg-gray-900 p-4 pr-4 pl-4 rounded-lg shadow-xl text-white w-full md:w-auto flex lg:flex-col md:flex-row items-center justify-center md:space-x-4 lg:space-x-0 lg:space-y-2">
      {/* Task Title and Number */}
      <div className="flex flex-col items-center md:items-start lg:items-center">
        <h2 className="text-lg sm:text-xl font-semibold">Running Task</h2>
        <p className="text-2xl font-bold">65</p>
      </div>

      {/* Circular Progress Bar */}
      <div className="w-[6rem] h-[6rem] md:w-[4rem] md:h-[4rem] lg:w-[6rem] lg:h-[6rem] mt-2 lg:mt-4 flex justify-center items-center">
        <motion.div style={{ width: "100%", height: "100%" }}>
          <CircularProgressbar
            value={animatedPercentage.get()}
            text={`${animatedPercentage.get()}%`}
            styles={buildStyles({
              textColor: "#ffffff",
              pathColor: "#6366f1",
              trailColor: "#374151",
            })}
          />
        </motion.div>
      </div>

      {/* Task Count */}
      <p className="text-xs sm:text-sm md:pt-2 md:ml-4 lg:ml-0">
        100 <span className="text-gray-400">Task</span>
      </p>
    </div>
  );
}

export default RunningTaskCard;
