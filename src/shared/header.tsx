// import "../css/styles.css";
import "../css/home.css";
import { useContext } from "react";
import { FirebaseContext } from "./firebaseProvider";

export function Header() {
  const fireContext = useContext(FirebaseContext);

  return (
    <>
      <nav>
        {fireContext != null &&
          fireContext.isAuthenticated &&
          fireContext.user != null && (
            <input
              id="signOutBtn"
              className="ais-button"
              type="button"
              onClick={async () => {
                await fireContext?.userSignOut();
              }}
              value="Sign Out"
            />
          )}
      </nav>
      <a className="imgLink" href="">
        <img src="/images/logo.png"></img>
      </a>
    </>
  );
}
