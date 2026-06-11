10.06.2026
1. The Setup and Variable Recovery
jsx
Plain Text
const { userId } = useParams();
const navigate = useNavigate(); 

useParams(): Reads the user ID directly out of your browser's address bar path (e.g., from /app/user-roles/action/A7701570, it grabs "A7701570").
useNavigate(): This is your program's navigation trigger. It acts as an instruction tool to redirect the admin back to the list dashboard automatically when they hit save.
2. Hydrating State from localStorage
jsx
Plain Text
useEffect(() => {
  const storedUsers = localStorage.getItem("app_users");
  const currentPool = storedUsers ? JSON.parse(storedUsers) : userDataList;
  const foundUser = currentPool.find((u) => u.sgid.toUpperCase() === userId?.toUpperCase());
  if (foundUser) { setUser(foundUser); }
}, [userId]);

 
Why it runs: This lifecycle hook fires as soon as the page opens.
What it does: It checks your browser's persistent localStorage. If it finds nothing, it grabs your base fallback data array (userDataList).
The Search: It runs a case-insensitive match (.toUpperCase()) to look through the user list array and pick out the matching object profile data to populate your page view.
3. Modifying Checkbox Selections
jsx
Plain Text
const handleCheckboxChange = (e) => {
  const { value, checked } = e.target;
  setUser((prev) => {
    const currentRoles = prev.userRoles || [];
    const updatedRoles = checked
      ? [...currentRoles, value] // Adds a selected role safely using spread
      : currentRoles.filter((role) => role !== value); // Removes an unselected role
    
    return { ...prev, userRoles: updatedRoles };
  });
};

 
Toggling array elements: When an admin clicks a checkbox, this handler checks if the box was ticked or unticked.
Immutability: Instead of changing your existing array data directly (which breaks React rendering), it utilizes a spread operator ([...]) to create a fresh copy with the updated role elements.
4. Saving the Edits Permanently
jsx
Plain Text
const handleSaveChanges = (e) => {
  e.preventDefault();
  const storedUsers = localStorage.getItem("app_users");
  let currentUsersList = storedUsers ? JSON.parse(storedUsers) : userDataList;
  const userIndex = currentUsersList.findIndex((u) => u.sgid.toUpperCase() === user.sgid.toUpperCase());
  if (userIndex !== -1) {
    currentUsersList[userIndex] = user; // Overwrites the old user array object
    localStorage.setItem("app_users", JSON.stringify(currentUsersList)); // Saves string copy
    navigate("/app/user-roles"); // Redirects home
  }
};
Intercepting submission: preventDefault() keeps your web page from performing a hard refresh when form actions complete.
Overwriting the registry: It pulls your current list from local memory, runs a quick index search (findIndex) to find where this user sits, overwrites their profile with the modified choices, converts the list back into text string memory, and returns to the home dashboard view.
5. Layout Rendering Architecture
Loading Boundary: If user state fields evaluate to null while data is still loading, it renders a clean loading fallback string block to prevent layout reference issues.
Isolated Header: The <div className="top-bar"> code segment is structured completely independent of your content layout wrappers. This ensures your header properties snap right to the left boundary margin, while your white profile configuration card container centers itself perfectly on screen.
