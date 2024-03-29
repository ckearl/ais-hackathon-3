import { useContext } from "react";
import { FirebaseContext } from "../firebaseProvider";

export function LoginPage() {
  const fireContext = useContext(FirebaseContext);

  if (fireContext !== null && fireContext !== undefined) {
    return (
      <>
        <form>
          <h2>Login</h2>
          <div id="titleUnderline"></div>
          <input
            id="googleSignInBtn"
            className="ais-button"
            type="button"
            onClick={async () => {
              await fireContext?.googleSignIn();
            }}
            value="Continue With Google"
          />
        </form>
      </>
    );
  }
}
