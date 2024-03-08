import { Navigate } from "react-router-dom";
import { FirebaseContext } from "../shared/firebaseProvider";
import { useContext } from "react";

// Any page passed to this will not be accessible if the user is not an authenticated officer
const ProtectedRoute = ({ element }: { element: React.ReactElement }) => {
  const fireContext = useContext(FirebaseContext);

  if (fireContext) {
    console.log("fireContext found");
    console.log(fireContext?.isAuthenticated);
  }

  if (!fireContext?.isAuthenticated) {
    // User not authenticated, redirect to login page
    console.log("Not authenticated");
    return <Navigate to="/" replace />;
  }

  if (!fireContext?.user || !fireContext?.user.isOfficer) {
    // User is not an officer, redirect to unauthorized page or home
    console.log("Invalid user or not an officer");
    return <Navigate to="/" replace />;
  }

  // User is authenticated and is an officer, render the component
  return element;
};

export default ProtectedRoute;
