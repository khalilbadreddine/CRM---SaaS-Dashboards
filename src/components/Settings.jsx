import { useState } from "react";

function Settings() {
  const [activeTab, setActiveTab] = useState("general");
  const [language, setLanguage] = useState("English");
  const [timezone, setTimezone] = useState("24 Hours");
  const [notifications, setNotifications] = useState({
    message: true,
    taskUpdate: false,
    taskDeadline: true,
    mentorHelp: false,
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  const handleNotificationChange = (name) => {
    setNotifications((prev) => ({
      ...prev,
      [name]: !prev[name],
    }));
  };

  const saveChanges = () => {
    console.log("Settings saved:", { language, timezone, notifications });
  };

  const handleLogout = async () => {
    // Clear local storage
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="p-6">
      <div className="flex space-x-4 border-b mb-6">
        <button
          onClick={() => handleTabChange("general")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "general"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          } focus:outline-none`}
        >
          General
        </button>
        <button
          onClick={() => handleTabChange("notification")}
          className={`py-2 px-4 text-sm font-medium ${
            activeTab === "notification"
              ? "text-blue-600 border-b-2 border-blue-600"
              : "text-gray-600"
          } focus:outline-none`}
        >
          Notification
        </button>
      </div>

      {activeTab === "general" && (
        <div className="space-y-4">
          <div>
            <h2 className="text-lg font-semibold">Language</h2>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option value="English">English (Default)</option>
              <option value="Spanish">Spanish</option>
            </select>
          </div>

          <div>
            <h2 className="text-lg font-semibold">Timezone</h2>
            <select
              value={timezone}
              onChange={(e) => setTimezone(e.target.value)}
              className="block w-full p-2 border border-gray-300 rounded-md mt-1"
            >
              <option value="24 Hours">24 Hours</option>
              <option value="12 Hours">12 Hours</option>
            </select>
          </div>

          <button
            onClick={saveChanges}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      )}

      {activeTab === "notification" && (
        <div className="space-y-4">
          <h2 className="text-lg font-semibold">Notifications</h2>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={notifications.message}
              onChange={() => handleNotificationChange("message")}
              className="form-checkbox text-blue-600"
            />
            <span>Message</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={notifications.taskUpdate}
              onChange={() => handleNotificationChange("taskUpdate")}
              className="form-checkbox text-blue-600"
            />
            <span>Task Update</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={notifications.taskDeadline}
              onChange={() => handleNotificationChange("taskDeadline")}
              className="form-checkbox text-blue-600"
            />
            <span>Task Deadline</span>
          </label>

          <label className="flex items-center space-x-2">
            <input
              type="checkbox"
              checked={notifications.mentorHelp}
              onChange={() => handleNotificationChange("mentorHelp")}
              className="form-checkbox text-blue-600"
            />
            <span>Mentor Help</span>
          </label>

          <button
            onClick={saveChanges}
            className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:outline-none"
          >
            Save Changes
          </button>
        </div>
      )}

      {/* Logout Button */}
      <div className="mt-6">
        <button
          onClick={handleLogout}
          className="w-full py-2 bg-red-600 text-white font-semibold rounded-md hover:bg-red-700 focus:outline-none"
        >
          Logout
        </button>
      </div>
    </div>
  );
}

export default Settings;
