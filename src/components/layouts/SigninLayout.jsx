import { useEffect, useState } from "react";
import { useNavigate, Navigate } from "react-router-dom";
import { auth } from "../../utils/auth";
import bgImg from "../../assets/cm.png";
import es from "../../assets/logo.png";
import sg from "../../assets/company_logo.png";

/**
 * SigninLayout Component
 * Displays the login screen with a premium glassmorphic layout.
 * Once login succeeds, sets access token and navigates to dashboard.
 */

export default function SigninLayout() {
  const navigate = useNavigate();
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  useEffect(() => {
    document.title = "Estimora | Login";
  }, []);

  // If already authenticated, redirect straight to the dashboard
  if (auth.isAuthenticated()) {
    return <Navigate to="/app/dashboard" replace />;
  }

  const handleLogin = () => {
    setIsLoggingIn(true);
    // Simulate API delay for a premium feel
    setTimeout(() => {
      auth.login();
      setIsLoggingIn(false);
      navigate("/app/dashboard", { replace: true });
    }, 800);
  };

  return (
    <div
      className="w-full h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      <div className="relative w-[380px] min-h-[420px] max-w-md p-8 rounded-3xl bg-white/10 backdrop-blur-xl shadow-2xl border border-white/20 flex flex-col justify-between transition-all duration-300 hover:shadow-cyan-500/10">
        <div className="flex flex-col items-center gap-12 w-full mt-4">
          <img src={sg} className="h-16 object-contain" alt="Company Logo" />
          <img src={es} className="h-16 object-contain" alt="Estimora Logo" />
        </div>

        <div className="w-full mt-12 mb-4">
          <button
            onClick={handleLogin}
            disabled={isLoggingIn}
            className="w-full cursor-pointer bg-gradient-to-r from-zinc-600 to-zinc-400 hover:from-cyan-600 hover:to-cyan-500 active:scale-98 text-white font-bold py-3 px-6 rounded-full transition-all duration-300 shadow-lg shadow-zinc-950/20 hover:shadow-cyan-500/20 flex items-center justify-center gap-2"
          >
            {isLoggingIn ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Logging in...
              </>
            ) : (
              "Login"
            )}
          </button>
        </div>
      </div>
    </div>
  );
}
