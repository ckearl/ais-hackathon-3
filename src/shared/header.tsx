import "../css/styles.css";
// import "../css/home.css";
import { useContext } from "react";
import { FirebaseContext } from "./firebaseProvider";
import { NavLink } from "react-router-dom";

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
              className="ais-button background-ais"
              type="button"
              onClick={async () => {
                await fireContext?.userSignOut();
              }}
              value="Sign Out"
            />
          )}
        {/* {fireContext != null &&
          fireContext.isAuthenticated &&
          fireContext.user != null && <Link to="/">Home</Link>} */}
        {fireContext != null &&
          fireContext.isAuthenticated &&
          fireContext.user != null &&
          fireContext.user.isOfficer && (
            <NavLink to="/createEvent">Create Event</NavLink>
          )}
      </nav>
      <a className="imgLink" href="/">
        <img src="/images/logo.png" alt="AIS-logo"></img>
      </a>
    </>
  );
}
