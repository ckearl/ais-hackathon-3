import { Link } from "react-router-dom";
import "./css/styles.css";
import "./css/submit_success.css";

export function EventCreated() {
  return (
    <div className="center-block">
      <h2>Event Created Successfully</h2>
      <Link to="/adminHome" className="homeLink">
        Home
      </Link>
    </div>
  );
}
