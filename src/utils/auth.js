/**
 * Lightweight Authentication Utility
 * Manages user session state in localStorage.
 * Similar to the CMMS auth helper, this provides basic session management
 * that can easily be updated to connect with backend cookies or auth APIs.
 */
export const auth = {
  /**
   * Checks if user has a valid access token in storage
   * @returns {boolean}
   */
  isAuthenticated: () => {
    return !!localStorage.getItem("accessToken");
  },

  /**
   * Stores access token and flags to signify authenticated session
   * @param {string} token 
   */
  login: (token) => {
    localStorage.setItem("accessToken", token || "mock-access-token-12345");
    localStorage.setItem("userRole", "admin"); // mock user role
  },

  /**
   * Clears all session and authentication data
   */
  logout: () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("userRole");
  }
};
