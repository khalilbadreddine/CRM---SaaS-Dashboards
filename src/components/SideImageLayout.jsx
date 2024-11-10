// eslint-disable-next-line react/prop-types
const SideImageLayout = ({ bgColor = "bg-sky-400" }) => (
  <div className={`flex justify-center items-center h-full w-full ${bgColor}`}>
    <div className="w-1/2 h-1/2 bg-white rounded-md shadow-md flex justify-center items-center">
      {/* Placeholder text, replace this later with an image or any content */}
      <span className="text-gray-700 font-semibold text-lg">
        Your Content Here
      </span>
    </div>
  </div>
);
/* const SideImageLayout = ({ imageSrc, altText }) => (
  <div className="flex justify-center items-center bg-blue-500 h-full w-full">
    <img src={imageSrc} alt={altText} className="w-3/4 h-auto" />
  </div>
);
 */

export default SideImageLayout;
