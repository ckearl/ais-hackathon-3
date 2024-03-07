import React from "react";
import { Link } from "react-router-dom";
import "./css/styles.css";
import "./css/submit_success.css";

const LogoutSuccess: React.FC = () => {
  return (
    <div>
      <meta charSet="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>AIS Events - Log Out Successful</title>
      <link rel="icon" href="assets/logo.png" type="image/x-icon" />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      <link
        href="https://fonts.googleapis.com/css2?family=Open+Sans:ital,wdth,wght@0,75..100,300..800;1,75..100,300..800&display=swap"
        rel="stylesheet"
      />
      <h2>Logged Out Successfully</h2>
      <Link to="/login">Log Back In</Link>
    </div>
  );
};

export default LogoutSuccess;
