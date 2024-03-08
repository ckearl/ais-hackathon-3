import React from "react";
import "./css/styles.css";
import "./css/submit_success.css";

function SubmitSuccess() {
  return (
    <div>
      <h2>Did you bring a plus one with you?</h2>
      <p>Select one of the following to comlpete your check in.</p>
      <div id="yesNoContainer">
        <a href="userHome.html">Yes</a>
        <a className="no" href="userHome.html">
          No
        </a>
      </div>
    </div>
  );
}

export default SubmitSuccess;
