import { useEffect } from "react";
import { Link } from "react-router-dom";

/**
 * NotFound Component (404 Screen)
 * Displayed for invalid URLs.
 */
export default function NotFound() {
  useEffect(() => {
    document.title = "Estimora | Page Not Found";
  }, []);

  return (
    <div className="w-screen h-screen bg-zinc-950 flex flex-col items-center justify-center text-zinc-100 font-sans p-6 text-center">
      <div className="text-8xl font-extrabold tracking-widest text-zinc-800">404</div>
      <h2 className="font-bold mt-4 mb-2 bg-gradient-to-r from-white to-zinc-400 bg-clip-text text-transparent">
        Lost in space
      </h2>
      <p className="text-zinc-500 max-w-sm mb-8 text-sm">
        The page you are looking for doesn't exist or has been moved to a different directory path.
      </p>
      <Link
        to="/"
        className="bg-gradient-to-r from-zinc-700 to-zinc-500 hover:from-cyan-600 hover:to-cyan-500 text-white font-bold py-3 px-8 rounded-full transition-all duration-300 shadow-lg"
      >
        Return Home
      </Link>
    </div>
  );
}
