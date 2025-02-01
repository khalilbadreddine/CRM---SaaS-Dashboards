// App.js

import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import SignInPage from "./components/SignInPage";
import SignUpPage from "./components/SignUpPage";
import MainLayout from "./components/MainLayout";
import DataInputPage from "./components/DataInputPage";
import Overview from "./components/Overview";
import Task from "./components/Task";
import Mentors from "./components/Mentors";
import Messages from "./components/Messages";
import Settings from "./components/Settings";

const isAuthenticated = localStorage.getItem("token") !== null;

const router = createBrowserRouter(
  isAuthenticated
    ? [
        {
          path: "/",
          element: <MainLayout />,
          children: [
            { path: "overview", element: <Overview /> },
            { path: "tasks", element: <Task /> },
            { path: "mentors", element: <Mentors /> },
            { path: "messages", element: <Messages /> },
            { path: "settings", element: <Settings /> },
            { path: "/", element: <Navigate to="/overview" /> },
          ],
        },
        { path: "/addfill", element: <DataInputPage /> },
      ]
    : [
        { path: "/signin", element: <SignInPage /> },
        { path: "/signup", element: <SignUpPage /> },
        { path: "/addfill", element: <DataInputPage /> },
        { path: "/*", element: <Navigate to="/signin" /> },
      ]
);

function App() {
  return <RouterProvider router={router} />;
}
/* testtbonjour  */
export default App;
