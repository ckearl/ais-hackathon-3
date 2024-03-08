import { Navigate } from "react-router-dom";
import { FirebaseContext } from "../shared/firebaseProvider";
import { useContext } from "react";

// Any page passed to this will not be accessible if the user is not an authenticated officer
const ProtectedRoute = ({
  element,
  isOfficerOnly,
}: {
  element: React.ReactElement;
  isOfficerOnly: boolean;
}) => {
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

  if (
    !fireContext?.user ||
    (isOfficerOnly && (!fireContext || !fireContext?.user?.isOfficer))
  ) {
    // User is not an officer, redirect to unauthorized page or home
    console.log("Invalid user or not an officer");
    return <Navigate to="/" replace />;
  }

  // User is authenticated and is an officer, or it is not an officer only route, render the component
  return element;
};

export default ProtectedRoute;
