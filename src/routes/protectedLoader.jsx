import { redirect } from "react-router-dom";
import { auth } from "../utils/auth";

/**
 * Route loader for protected paths.
 * Checks authentication status and redirects unauthorized users to `/login`.
 * Allows routes to load normally if the user has an active session.
 */
export async function protectedLoader() {
  if (!auth.isAuthenticated()) {
    return redirect("/login");
  }
  return null; // continue rendering target route
}
