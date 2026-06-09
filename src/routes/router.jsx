import { createBrowserRouter, Navigate } from "react-router-dom";
import { protectedLoader } from "./protectedLoader";
import { auth } from "../utils/auth";
import SigninLayout from "../components/layouts/SigninLayout";
import MainLayout from "../components/layouts/MainLayout";
import Home from "../components/views/Home";
import NotFound from "../components/common/NotFound";
import UserRoles from "../components/layouts/userRoles";
import UserForm from "../components/layouts/userRoles/UserForm";

/**
 * RootRedirect Component
 * Handles the application root path ("/").
 * Redirects authenticated users to the Home tab, and non-authenticated users to login.
 */
function RootRedirect() {
  if (auth.isAuthenticated()) {
    return <Navigate to="/app/home" replace />;
  }
  return <Navigate to="/login" replace />;
}

// Simple placeholders for secondary tabs
function ProjectsPlaceholder() {
  return (
    <div className="p-8 flex flex-col gap-4 animate-fade-in bg-white h-full">
      <h2 className="font-bold text-[#3da89b]">Projects</h2>
      <hr className="border-zinc-200" />
      <p className="text-zinc-500 text-sm">Here you will see and manage your active cost management projects.</p>
    </div>
  );
}

function UserRolesPlaceholder() {
  return (
    <div className="p-8 flex flex-col gap-4 animate-fade-in bg-white h-full">
      <h2 className="font-bold text-[#3da89b]">User Roles</h2>
      <hr className="border-zinc-200" />
      <p className="text-zinc-500 text-sm">Configure user access rights, team permissions, and assign operational roles.</p>
    </div>
  );
}

function MasterPlaceholder() {
  return (
    <div className="p-8 flex flex-col gap-4 animate-fade-in bg-white h-full">
      <h2 className="font-bold text-[#3da89b]">Master Configuration</h2>
      <hr className="border-zinc-200" />
      <p className="text-zinc-500 text-sm">Define master templates, estimation schemas, defaults, and currency profiles.</p>
    </div>
  );
}

// Router configuration mapping paths to layouts and views
export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootRedirect />,
  },
  {
    path: "/login",
    element: <SigninLayout />,
  },
  {
    path: "/app",
    element: <MainLayout />,
    loader: protectedLoader,
    children: [
      {
        index: true,
        element: <Navigate to="home" replace />,
      },
      {
        path: "home",
        element: <Home />,
      },
      {
        path: "projects",
        element: <ProjectsPlaceholder />,
      },
      {
        path: "user-roles",
        element: <UserRoles />,
      },
      {
        path: "user-roles/add-user",
        element: <UserForm />,
      },
      {
        path: "master",
        element: <MasterPlaceholder />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);
