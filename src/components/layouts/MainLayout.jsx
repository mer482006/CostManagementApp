import { NavLink, useNavigate, Outlet } from "react-router-dom";
import { auth } from "../../utils/auth";

/**
 * MainLayout Component
 * Implements the layout from the reference image:
 * - Full-width teal top bar with brand logo and user details (SANTHOSH J / S3510182).
 * - Light sidebar on the left with navigation links.
 * - Main content container on the right.
 */
export default function MainLayout() {
  const navigate = useNavigate();

  // Active link style matching the teal capsule in the image
  const navLinkClass = ({ isActive }) =>
    `flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200 text-sm font-medium ${
      isActive
        ? "bg-[#3da89b] text-white shadow-sm"
        : "text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900"
    }`;

  const handleLogout = () => {
    auth.logout();
    navigate("/login", { replace: true });
  };

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-white text-zinc-950 font-sans">
      {/* Top Bar */}
      <header className="h-14 bg-[#3da89b] px-6 flex items-center justify-between shrink-0 shadow-sm z-20">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-lg tracking-wide text-white flex items-center gap-1">
            <span className="text-">Ê</span>STIMORA
          </span>
        </div>

        {/* User Profile Info */}
        <div className="flex items-center gap-3 text-white">
          <div className="flex flex-col items-end text-right select-none">
            <span className="font-bold text-xs tracking-wide">SANTHOSH J</span>
            <span className="text-[10px] opacity-90 font-medium">S3510182</span>
          </div>
          {/* User Icon Circle */}
          <div className="w-8 h-8 rounded-full border border-white/80 flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z" />
            </svg>
          </div>
          {/* Simple Logout button inside profile area for convenience */}
          <button 
            onClick={handleLogout} 
            title="Log Out"
            className="ml-2 hover:bg-white/10 p-1.5 rounded-full transition-colors cursor-pointer"
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15M12 9l-3 3m0 0 3 3m-3-3h12.75" />
            </svg>
          </button>
        </div>
      </header>

      {/* Main Layout Container (Sidebar + Content) */}
      <div className="flex-1 flex overflow-hidden">
        {/* Left Sidebar */}
        <aside className="w-56 bg-white border-r border-zinc-200 flex flex-col p-4 shrink-0 z-10">
          <nav className="flex flex-col gap-2">
            {/* Home Link */}
            <NavLink to="/app/home" className={navLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.03 0 1.9.693 2.166 1.638m-7.377 2.24a4.751 4.751 0 0 1 7.477 0M4.75 9a2.25 2.25 0 0 1 2.25-2.25h1.5a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25h-1.5A2.25 2.25 0 0 1 4.75 18V9Z" />
              </svg>
              <span>Home</span>
            </NavLink>

            {/* Projects Link */}
            <NavLink to="/app/projects" className={navLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.518l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
              </svg>
              <span>Projects</span>
            </NavLink>

            {/* User Roles Link */}
            <NavLink to="/app/user-roles" className={navLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 0 0 2.25-2.25V6.75A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25v10.5a2.25 2.25 0 0 0 2.25 2.25Zm3-7.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <span>User Roles</span>
            </NavLink>

            {/* Master Link */}
            <NavLink to="/app/master" className={navLinkClass}>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
              <span>Master</span>
            </NavLink>
          </nav>
        </aside>

        {/* Content Body */}
        <main className="flex-1 overflow-y-auto bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
