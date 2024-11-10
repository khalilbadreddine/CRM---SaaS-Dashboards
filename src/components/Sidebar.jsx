import PropTypes from "prop-types";
import { NavLink } from "react-router-dom";
import { Logo, MainD, ChatIcon, SettingsIcon, Profile, Task } from "./Icons";
import HelpCenter from "./HelpCenter";

function Sidebar({ isOpen, onClose }) {
  return (
    <div
      className={`relative inset-y-0 left-0 z-50 w-40 bg-white rounded-lg shadow-lg transform transition-transform duration-200 ease-in-out overflow-y-auto
        ${isOpen ? "translate-x-0" : "-translate-x-full"}
        sm:translate-x-0 sm:static sm:h-screen sm:w-48 sm:ml-4 pt-4 pb-4`}
    >
      <button className="absolute top-4 right-4 sm:hidden" onClick={onClose}>
        &times;
      </button>

      <div className="bg-[#EBEDF7] rounded-lg flex flex-col justify-between h-full p-4 text-sm md:text-base">
        <div>
          <div className="flex items-center justify-center py-4">
            <Logo />
            <h2 className="text-xl md:text-2xl font-bold">DNX</h2>
          </div>

          <nav className="space-y-2 mt-2">
            <NavLink
              to="/overview"
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-700 ${
                  isActive ? "bg-gray-300 text-gray-700" : "hover:bg-gray-200"
                } rounded`
              }
            >
              <MainD />
              <span className="pl-2">Overview</span>
            </NavLink>
            <NavLink
              to="/tasks"
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-700 ${
                  isActive ? "bg-gray-300 text-gray-700" : "hover:bg-gray-200"
                } rounded`
              }
            >
              <Task />
              <span className="pl-2">Tasks</span>
            </NavLink>
            <NavLink
              to="/mentors"
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-700 ${
                  isActive ? "bg-gray-300 text-gray-700" : "hover:bg-gray-200"
                } rounded`
              }
            >
              <Profile />
              <span className="pl-2">Mentors</span>
            </NavLink>
            <NavLink
              to="/messages"
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-700 ${
                  isActive ? "bg-gray-300 text-gray-700" : "hover:bg-gray-200"
                } rounded`
              }
            >
              <ChatIcon />
              <span className="pl-2">Messages</span>
            </NavLink>
            <NavLink
              to="/settings"
              className={({ isActive }) =>
                `flex items-center p-2 text-gray-700 ${
                  isActive ? "bg-gray-300 text-gray-700" : "hover:bg-gray-200"
                } rounded`
              }
            >
              <SettingsIcon />
              <span className="pl-2">Settings</span>
            </NavLink>
          </nav>
        </div>

        <HelpCenter />
      </div>
    </div>
  );
}

Sidebar.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Sidebar;
