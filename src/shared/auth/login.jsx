import { useContext } from "react";
import { LoginPage } from "./loginPage";
import { UserHome } from "../../member/userHome";
import { CreateAccount } from "../auth/createAccount";
import { FirebaseContext } from "../firebaseProvider";

export function Login() {
  const fireContext = useContext(FirebaseContext);

  return (
    <main className="container-fluid bg-secondary text-center">
      <div>
        {fireContext.isAuthenticated && fireContext.user == null && (
          <CreateAccount />
        )}
        {fireContext.isAuthenticated && fireContext.user != null && (
          <UserHome />
        )}
        {!fireContext.isAuthenticated && <LoginPage />}
      </div>
    </main>
  );
}
