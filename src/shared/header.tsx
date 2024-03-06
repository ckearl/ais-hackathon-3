import { useContext } from "react";
import { FirebaseContext } from "./firebaseProvider";

export function Header() {
  const fireContext = useContext(FirebaseContext);

  return (
    <header className="App-header">
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
      <h1>This is Joseph test</h1>
      <input
        id="signOutButton"
        type="button"
        onClick={async () => {
          await fireContext?.userSignOut();
        }}
        value="Sign Out"
      />
    </header>
  );
}
