// Header.jsx
import { FiBell } from "react-icons/fi";

function Header() {
  return (
    <header className="w-full  flex items-center justify-between">
      <div className="sm:block hidden">
        {" "}
        {/* Hide on small screens */}
        <h1 className="text-xl font-semibold text-white">
          Hi, {localStorage.getItem("user")}
        </h1>
        <p className="text-sm text-white">Let’s finish your task today!</p>
      </div>
      <div className="flex items-center space-x-4">
        <FiBell className="text-white" />
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img
            src="/assets/kha.jpg"
            alt="profile pic"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </header>
  );
}

export default Header;
