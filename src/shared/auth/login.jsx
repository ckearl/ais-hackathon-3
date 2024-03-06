import { useContext } from "react";
import { LoginPage } from "./loginPage";
import { UserHome } from "../../member/userHome";
import { FirebaseContext } from "../firebaseProvider";

export function Login({ userId, onAuthChange }) {
  const fireContext = useContext(FirebaseContext);

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        {fireContext.isAuthenticated && <UserHome />}
        {!fireContext.isAuthenticated && <LoginPage />}
      </div>
    </main>
  );
}
