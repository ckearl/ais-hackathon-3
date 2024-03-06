import "../css/styles.css";
import "../css/home.css";
import { useContext } from "react";
import { FirebaseContext } from "./firebaseProvider";

export function Header() {
  const fireContext = useContext(FirebaseContext);

  return (
    <header>
      <nav>
        <input
          id="signOutButton"
          type="button"
          onClick={async () => {
            await fireContext?.userSignOut();
          }}
          value="Sign Out"
        />
      </nav>
      <a className="imgLink" href="">
        <img src="/images/logo.png"></img>
      </a>
    </header>
  );
}
