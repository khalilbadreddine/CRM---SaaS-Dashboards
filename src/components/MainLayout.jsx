import { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { MenuIcon } from "./Icons";

function MainLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <div className="flex flex-row text-white h-full bg-cover bg-center bg-[url('/assets/bg-test.jpg')]">
        <Sidebar
          isOpen={isSidebarOpen}
          onClose={() => setIsSidebarOpen(false)}
        />

        <div className="flex-1 sm:ml-4 ">
          {/* Adds margin to avoid content overlap with sidebar */}
          <button
            className="p-2 sm:hidden fixed top-2 left-2 z-50  rounded-full"
            onClick={() => setIsSidebarOpen(true)}
          >
            <MenuIcon />
          </button>
          <div className="overflow-y-auto h-screen">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}

export default MainLayout;
